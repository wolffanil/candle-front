import { Controller } from "react-hook-form";
import { IField } from "./field.interface";
import cn from "clsx";

const Field = <T extends Record<string, any>>({
  control,
  name,
  className,
  ...rest
}: IField<T>): JSX.Element => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <div
            className={cn(
              "bg-hoar-100 w-full border-b-[3px]",
              className,
              error ? "border-b-red-500" : "border-b-hoar-600"
            )}
          >
            <input
              onBlur={onBlur}
              onChange={onChange}
              value={(value || "").toString()}
              className="text-black font-cruinn text-[32px] bg-hoar-100 w-full outline-none py-2 px-1 placeholder-black"
              {...rest}
            />
          </div>
          {error && (
            <p className="text-red-600 text-[20px] mt-[5px]">{error.message}</p>
          )}
        </>
      )}
    />
  );
};

export default Field;
