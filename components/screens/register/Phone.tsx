import { IField } from "@/components/ui/form-elements/field.interface";
import { InputMask } from "@react-input/mask";
import { Controller } from "react-hook-form";
import cn from "clsx";

const Phone = <T extends Record<string, any>>({
  control,
  name,
  className,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div
          className={cn(
            "bg-hoar-100 w-full border-b-[3px]",
            className,
            error ? "border-b-red-500" : "border-b-hoar-600"
          )}
        >
          <InputMask
            mask="+7 (___) ___-__-__"
            onChange={onChange}
            value={value}
            showMask
            replacement={{ _: /\d/ }}
            className="text-black font-cruinn text-[20px] bg-hoar-100 w-full outline-none py-2 px-1 placeholder-black"
            {...rest}
          />
          {error && (
            <p className="text-red-600 text-[20px] mt-[5px]">{error.message}</p>
          )}
        </div>
      )}
      rules={{ required: "Это поле обязательно" }}
    />
  );
};

export default Phone;
