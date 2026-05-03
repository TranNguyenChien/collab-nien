import { format } from "date-fns";
import { vi } from "date-fns/locale/vi";
import { Calendar1 } from "lucide-react";
import type { DayPickerProps } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
	value?: Date;
	onChange?: (date: Date | undefined) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	calendarProps?: Omit<DayPickerProps, "mode" | "selected" | "onSelect">;
}

function DatePicker({
	value,
	onChange,
	placeholder = "Chọn ngày",
	disabled,
	className,
	calendarProps,
}: DatePickerProps) {
	return (
		<Popover>
			<PopoverTrigger disabled={disabled}>
				<div
					data-empty={!value}
					className={cn(
						"justify-start items-center pl-4 text-left font-normal data-[empty=true]:text-muted-foreground w-full h-12  border border-input flex rounded-lg",
						disabled
							? "pointer-events-none cursor-not-allowed bg-input/50 opacity-50"
							: "bg-white",
						className,
					)}
				>
					<Calendar1 className="mr-2 size-4" />
					{value ? format(value, "dd/MM/yyyy", { locale: vi }) : placeholder}
				</div>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={value}
					onSelect={onChange}
					locale={vi}
					{...calendarProps}
				/>
			</PopoverContent>
		</Popover>
	);
}

export { DatePicker };
export type { DatePickerProps };
