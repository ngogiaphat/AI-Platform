"use client";
import {cn} from "@/lib/utils";
import {tools} from "@/constants";
import {ArrowRight} from "lucide-react";
import {Card} from "@/components/ui/card";
import {useRouter} from "next/navigation";
export default function HomePage(){
	const router = useRouter();
  return(
		<div>
			<div className="mb-8 space-y-4">
				<h2 className="text-2xl text-center font-bold md:text-4xl">
					Explore the power of AI !!!
 				</h2>
				<p className="text-sm text-center text-muted-foreground font-light md:text-lg">
					AI is the future of technology - It is the most powerful tool that can be used to solve the most complex problems
				</p>
			</div>
			<div className="px-4 md:px-20 lg:px-32 space-y-4">
				{tools.map((tool) => (
					<Card onClick={() => router.push(tool.href)} className="flex items-center justify-between hover:shadow-md transition cursor-pointer p-4 border-black/5" key={tool.href}>
						<div className="flex gap-x-4 items-center">
							<div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
								<tool.icon className={cn("h-8 w-8", tool.color)}/>
							</div>
							<div className="font-semibold">
								{tool.label}
							</div>
						</div>
						<ArrowRight className="h-5 w-5"/>
					</Card>
				))}
			</div>
		</div>
	);
};