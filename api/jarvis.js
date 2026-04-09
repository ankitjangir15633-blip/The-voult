export default async function handler(req, res) {
    const token = process.env.GITHUB_TOKEN;
    const { cmd } = req.query;

    const response = await fetch(`https://api.github.com/repos/ankitjangir15633-blip/The-voult/contents/AJ_Build_${Date.now()}.html`, {
        method: "PUT",
        headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            message: "JARVIS DEPLOYMENT",
            content: Buffer.from(`<h1>Build Success for AJ: ${cmd}</h1>`).toString('base64')
        })
    });

    if (response.ok) res.status(200).json({ status: "Success" });
    else res.status(500).json({ status: "Failed" });
}
