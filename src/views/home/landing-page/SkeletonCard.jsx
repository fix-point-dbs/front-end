import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonCard() {
  return (
    <div className="p-4 rounded-xl shadow bg-white">
      <Skeleton height={160} className="rounded-t-xl mb-4" />
      <div className="space-y-2">
        <Skeleton width={`75%`} height={20} />
        <Skeleton width={`50%`} height={16} />
        <Skeleton width={`100%`} height={16} />
        <Skeleton width={`50%`} height={32} className="mt-4" />
        <Skeleton count={3} height={14} />
      </div>
    </div>
  );
}