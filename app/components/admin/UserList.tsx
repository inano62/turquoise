import { useEffect, useState } from "react";

export default function UserList() {
  type Users = {
    _id:string;
    email:string;
    role:boolean;
  }
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    fetch("/api/admin/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">ユーザー管理</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">メール</th>
            <th className="p-2 border">権限</th>
            <th className="p-2 border">操作</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td className="p-2 border">{u._id}</td>
              <td className="p-2 border">{u.email}</td>
              <td className="p-2 border">{u.role}</td>
              <td className="p-2 border">
                <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">
                  編集
                </button>
                <button className="px-2 py-1 bg-red-500 text-white rounded">
                  BAN
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}