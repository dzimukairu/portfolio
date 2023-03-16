import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";

const query = groq`*[_type == "skill"] | order(progress desc, title asc)`;

export default async function handler(req, res) {
  const skills = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
