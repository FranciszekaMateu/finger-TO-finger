import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const CoursesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('Cursos').select('*');
      if (error) {
        console.error('Error al obtener los datos:', error.message);
        return;
      }
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

