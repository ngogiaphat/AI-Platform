"use client";
import cn from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {Montserrat} from "next/font/google";
import {Code, ImageIcon, Music, Settings, VideoIcon, LayoutDashboard} from "lucide-react";
const montserrat = Montserrat({
	weight: "600",
	subsets: ["latin"],
});
const routes = [
	{
		label: "Dashboard",
		href: "/dashboard",
		color: "text-sky-500",
		icon: LayoutDashboard,	
	},
	{
    label: 'Image Generation',
    href: '/image',
    color: "text-pink-700",
    icon: ImageIcon,
  },
  {
    label: 'Video Generation',
    href: '/video',
    color: "text-orange-700",
    icon: VideoIcon,
  },
  {
    label: 'Music Generation',
    href: '/music',
    color: "text-emerald-500",
    icon: Music,
  },
  {
    label: 'Code Generation',
    href: '/code',
    color: "text-green-700",
    icon: Code,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];
const Sidebar = () => {
	return(
		<div className="flex flex-col h-full space-y-4 py-4 bg-[#111827] text-white">
			<div className="px-3 py-2 flex-1">
				<Link href="/dashboard" className="flex items-center pl-3 mb-14">
					<div className="relative w-8 h-8 mr-4">
						<Image fill alt="Logo" src="/logo.png"/>
					</div>
					<h1 className={cn("text-2xl font-bold", montserrat.className)}>
						Enterprise
					</h1>
				</Link>
				<div className="space-y-1">
					{routes.map((route) => (
						<Link href={route.href} key={route.href} className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer 
							hover:text-while hover:bg-white/10 rounded-lg transition"
						>
							<div className="flex items-center flex-1">
								<route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
								{route.label}
							</div>
						</Link>
					))}
				</div>
			</div> 
		</div>
	);
};
export default Sidebar;