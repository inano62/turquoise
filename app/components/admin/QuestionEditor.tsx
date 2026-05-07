export default function QuestionEditor({ question, onSave }:any) {
  return (
    <div className="p-4 border rounded bg-white shadow">
      <h3 className="text-xl font-bold mb-3">過去問編集</h3>

      <label className="block mb-2">
        タイトル
        <input
          className="border p-2 w-full"
          defaultValue={question.title}
        />
      </label>

      <label className="block mb-2">
        内容
        <textarea
          className="border p-2 w-full"
          defaultValue={question.body}
        />
      </label>

      <label className="block mb-2">
        公開
        <input type="checkbox" defaultChecked={question.published} />
      </label>

      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        保存
      </button>
    </div>
  );
}