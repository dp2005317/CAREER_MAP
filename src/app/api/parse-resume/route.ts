import { NextRequest, NextResponse } from "next/server";
import { Mistral } from "@mistralai/mistralai";
import * as pdfParseModule from "pdf-parse";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Parse PDF text
    let rawText = "";
    try {
      // Handle both CJS and ESM export structures
      const parsePdf = (pdfParseModule as any).default || pdfParseModule;
      const data = await parsePdf(buffer);
      rawText = data.text;
    } catch (e) {
      // Fallback if not PDF or PDF parsing fails
      rawText = buffer.toString("utf-8");
    }

    if (!rawText || rawText.trim().length < 50) {
      return NextResponse.json({ error: "Could not extract text from file." }, { status: 400 });
    }

    const apiKey = process.env.MISTRAL_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Mistral API key is not configured." }, { status: 500 });
    }

    const mistral = new Mistral({ apiKey });
    
    console.log("----- EXTRACTED PDF TEXT (FIRST 1000 CHARS) -----");
    console.log(rawText.slice(0, 1000));
    console.log("-------------------------------------------------");

    const prompt = `You are an expert tech recruiter and AI resume analyzer.
Given the following text extracted from a resume, you must extract the person's skills, target role, experience level, and projects.

CRITICAL INSTRUCTIONS:
1. ONLY extract information that is explicitly stated in the Resume Text below. Do NOT guess or hallucinate.
2. Ensure you extract every project listed in the resume. 
3. If a field or value cannot be found in the text, leave it empty (use an empty array [] or null).

You must reply with ONLY a valid JSON object following exactly this structure:
{
  "skills": ["Array", "Of", "Tech", "Skills"],
  "targetRole": "A suitable job title based on the resume (e.g. Frontend Developer)",
  "experienceLevel": "Student" | "Entry Level" | "Mid Level" | "Senior",
  "projects": [
    {
      "name": "Project Name",
      "description": "Short description of what the project is",
      "techStack": ["React", "Node.js"],
      "url": "Project URL if found, else null"
    }
  ],
  "githubUrl": "GitHub profile URL if found, else null",
  "linkedinUrl": "LinkedIn profile URL if found, else null",
  "portfolioUrl": "Portfolio URL if found, else null"
}

Resume Text:
${rawText.slice(0, 8000)}
`;

    const chatResponse = await mistral.chat.complete({
      model: "mistral-large-latest",
      responseFormat: { type: "json_object" },
      messages: [{ role: "user", content: prompt }]
    });

    const mistralResult = chatResponse.choices?.[0]?.message?.content;
    if (!mistralResult) {
      throw new Error("No response from Mistral AI");
    }

    let parsedJson;
    try {
      parsedJson = JSON.parse(mistralResult as string);
    } catch (e) {
      throw new Error("Mistral AI did not return valid JSON");
    }

    return NextResponse.json(parsedJson);

  } catch (error: any) {
    console.error("Resume parsing error:", error);
    return NextResponse.json(
      { error: "Failed to parse resume", details: error.message },
      { status: 500 }
    );
  }
}
