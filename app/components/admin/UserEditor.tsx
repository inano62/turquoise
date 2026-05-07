export default function UserEditor({ user, onSave }:any) {
  return (
    <div className="p-4 border rounded bg-white shadow">
      <h3 className="text-xl font-bold mb-3">ユーザー編集</h3>

      <label className="block mb-2">
        メール
        <input
          className="border p-2 w-full"
          defaultValue={user.email}
        />
      </label>

      <label className="block mb-2">
        権限
        <select className="border p-2 w-full" defaultValue={user.role}>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
      </label>

      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        保存
      </button>
    </div>
  );
}