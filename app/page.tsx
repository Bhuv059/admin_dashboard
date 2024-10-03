import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostTable from "@/components/posts/PostTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import PostsPagination from "@/components/posts/PostsPagination";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 p-4">
        <Link href="/posts">
          <DashboardCard
            title="Posts"
            count={100}
            icon={<Newspaper className="text-slate-500" size={72} />}
          />
        </Link>
        <Link href="/">
          <DashboardCard
            title="Categories"
            count={12}
            icon={<Folder className="text-slate-500" size={72} />}
          />
        </Link>
        <Link href="/">
          <DashboardCard
            title="Users"
            count={750}
            icon={<User className="text-slate-500" size={72} />}
          />
        </Link>
        <Link href="/">
          <DashboardCard
            title="Comments"
            count={1200}
            icon={<MessageCircle className="text-slate-500" size={72} />}
          />
        </Link>
      </div>
      <div className=" col-span-4 ...">
        <AnalyticsChart />
      </div>
      <div className=" col-span-4 ...">
        <PostTable title={"Latest Post"} limit={5} />
        <PostsPagination />
      </div>
    </>
  );
}
