import { dDayCalculator } from "../../helpers/helper";
import { ChallengeDataProps } from "../../interface/interface";

export default function ChallengeCard({
  challengeData,
}: {
  challengeData: ChallengeDataProps;
}) {
  const stardDDay = dDayCalculator(challengeData.startDate);
  return (
    <div className="rounded-2xl border p-4 hover:bg-zinc-200 grid grid-cols-2 grid-rows-2 gap-y-1  items-center">
      <div className="col-span-2">
        <p className="text-xl text-ellipsis overflow-hidden line-clamp-1 ">
          {challengeData.title}
        </p>
        <p className="text-ellipsis overflow-hidden">{challengeData.content}</p>
      </div>
      <div className=" col-span-1 h-full flex items-end">
        <p className="text-lg ">
          {challengeData.goal_amount.toLocaleString("ko-KR")} 원
        </p>
      </div>
      <div className=" col-span-1 text-right">
        <p className="text-lg text-accent text-ellipsis overflow-hidden line-clamp-1">
          모집 마감 D-{stardDDay}
        </p>
        <p className="text-lg text-accent text-ellipsis overflow-hidden">
          {challengeData.cnt} / {challengeData.maxPeople}
        </p>
      </div>
    </div>
  );
}