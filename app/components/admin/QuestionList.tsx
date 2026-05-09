import { useEffect, useState } from "react";

export default function QuestionList() {
  type Question = {
  _id: string;
  title: string;
  published: boolean;
  createdAt?: string;
};

  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    async function load() {
      const res = await fetch("/api/admin/questions");
      const data: Question[] = await res.json();
      setQuestions(data);
    }
    load();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">過去問管理</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">タイトル</th>
            <th className="p-2 border">公開</th>
            <th className="p-2 border">操作</th>
          </tr>
        </thead>

        <tbody>
          {questions.map((q) => (
            <tr key={q._id}>
              <td className="p-2 border">{q._id}</td>
              <td className="p-2 border">{q.title}</td>
              <td className="p-2 border">{q.published ? "公開" : "非公開"}</td>
              <td className="p-2 border">
                <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">
                  編集
                </button>
                <button className="px-2 py-1 bg-red-500 text-white rounded">
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}