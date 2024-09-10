import { useRouter } from "next/router";

export default function ItemDetails() {
  const router = useRouter();
  const { id } = router.query;
}
