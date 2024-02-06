import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const filePath = path.resolve('./public/resume/Resume.pdf');
    const buffer = await readFile(filePath);

    const headers = new Headers();
    headers.append("Content-Disposition", 'attachment; filename="Resume.pdf"');
    headers.append("Content-Type", "application/pdf");

    return new Response(buffer, {
      headers,
    });
  } catch (error) {
    console.error(error);
    return new Response('An error occurred while processing your request.', { status: 500 });
  }
}
