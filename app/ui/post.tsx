type PostProps = {
  post: {
    id: number
    title: string
  }
}

export function Post({ post }: PostProps) {
  return (
    <li>
      {post.title}
    </li>
  )
}