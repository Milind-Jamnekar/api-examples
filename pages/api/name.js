// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function name(req, res) {
  res
    .status(200)
    .json({ name: "A function with name is returing this sentence 😁" });
}
