import { useState } from "react";
import { shortcuts } from "../../../data/shortcuts";

export default function Shortcuts() {
  const [theme] = useState("");
  return (
    <>
      <div className="grid grid-cols-1 gap-5 select-none">
        {shortcuts.map((s, i) => (
          <div className="p-3 card-theme rounded" key={i}>
            <div className="flex justify-between">
              <div className="font-semibold me-2">{s.shortcut}</div>
              <div>{s.title}</div>
            </div>
            {s.description && (
              <>
                <hr
                  className={`${
                    theme === "dark" ? "border-zinc-600" : "border-zinc-400"
                  } my-2`}
                />
                <div>{s.description}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
