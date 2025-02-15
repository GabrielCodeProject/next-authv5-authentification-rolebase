"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import CardWrapper from "../card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../../schemas";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { register } from "@/actions/register";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";
import GoogleLogin from "../google-login";

export const RegisterForm = () => {
  return <div>RegisterForm</div>;
};
