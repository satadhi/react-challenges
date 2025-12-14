import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import "./App.css";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const posts = [
  { id: 1, title: "momo master" },
  { id: 2, title: "Charls" },
];

// for methods like posts/1
//you can update the queryKey array as ['post', 1] something like this

function App() {
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["post"],
    queryFn: () => wait(1000).then(() => [...posts]),
  });

  const postMutation = useMutation({
    mutationFn: async (title: string) => {
      // await wait(1000);
      return posts.push({ id: Date.now(), title });
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["post"] }),
  });

  if (postQuery.isPending) return <div> Loading ....</div>;
  return (
    <>
      {postQuery.data?.map((ele) => (
        <div key={ele.id}>{ele.title}</div>
      ))}

      <button onClick={() => postMutation.mutate(crypto.randomUUID())}>
        Add new
      </button>
    </>
  );
}

export default App;
