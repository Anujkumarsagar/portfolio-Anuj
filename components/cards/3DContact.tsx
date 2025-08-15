"use client";

import React, { useActionState, useEffect } from "react";
import "./styles/3DContact.css";
import { sendEmailAction } from "@/services/ThreeDContactSubmit";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { useToast } from "../ui/use-toast";
import { toast } from "sonner";

type Props = {};
const initialState = { status: false, message: "", data: "" };

const ThreeDContact = (props: Props) => {
  const [state, formAction, isPending] = useActionState<{
    message: string;
    status: boolean;
    data: SMTPTransport.SentMessageInfo;
  }>(sendEmailAction, initialState);

  
  useEffect(() => {
    if (!state.message) return;
    if (state.status) {
      toast({title: "Success", description: state.message});
    } else {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="parent m-6">
        <div className="card">
          {/* AK Logo etc... */}
          <div className="logo">
            <span className="circle circle1"></span>
            <span className="circle circle2"></span>
            <span className="circle circle3"></span>
            <span className="circle circle4"></span>
            <span className="circle circle5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="svg"
              >
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="100%" stopColor="#00c37b" />
                  </linearGradient>
                </defs>
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="100"
                  fontWeight="bold"
                  fill="url(#grad)"
                  fontFamily="monospace"
                >
                  AK
                </text>
              </svg>
            </span>
          </div>

          <div className="glass"></div>

          {/* Contact Form Content */}
          <div className="content">
            <span className="text">Send me a message below</span>

            <div className="formArea">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input-text"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input-text"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="input-text"
                rows={2}
              ></textarea>

              <button type="submit" className="submitBtn" disabled={isPending}>
                {isPending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ThreeDContact;
