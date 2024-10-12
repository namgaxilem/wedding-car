import BlogDetail from "../_view/BlogDetail";

type Props = {
  params: {
    blogId: string;
  };
};

export default function Page({ params: { blogId } }: Props) {
  return <BlogDetail blogDocumentId={blogId} />;
}
