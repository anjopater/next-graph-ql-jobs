import { useRouter } from 'next/dist/client/router';
import Jobs from '../../components/Jobs';

export default function OrderPage() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <div>
      <Jobs page={page || 1} />
    </div>
  );
}
