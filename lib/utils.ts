import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import nodemailer from "nodemailer"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

