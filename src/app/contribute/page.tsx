import MicroIcon from "@/components/Icon/Micro";
import Contribute from "@/components/Media/Contribute";
import CentiText from "@/components/Text/Centi";
import React from "react";

const Conribute = () => {
  return (
    <div className="flex flex-col gap-6">
      <CentiText text="Contibute" />
      <div className="flex gap-4">
        <MicroIcon
          src="/figma.png"
          alt="Figma"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <MicroIcon
          src="/github.png"
          alt="Github"
          path="https://github.com/Abdout/Databayt"
        />

        <MicroIcon
          src="/discord.png"
          alt="Discord"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <MicroIcon
          src="/whatsapp.png"
          alt="Discord"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />
      </div>
      <CentiText text="Skill" />
      <div className="flex gap-4">
        <MicroIcon
          src="/typescript.png"
          alt="Typescript"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <MicroIcon
          src="/react.png"
          alt="React"
          path="https://github.com/Abdout/Databayt"
        />

        <MicroIcon
          src="/nextjs.png"
          alt="Discord"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <MicroIcon
          src="/express.svg"
          alt="Express"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />
      </div>

      <div className="flex gap-4">
        <MicroIcon
          src="/mongodb.svg"
          alt="MongoDB"
          path="https://www.figma.com/community/file/1303390002899241380/databayt"
        />

        <MicroIcon
          src="/rust.svg"
          alt="Rust"
          path="https://github.com/Abdout/Databayt"
        />
        
        </div>
        <div className="text-[14px]">
        <CentiText text="Block" />
        <div className="flex gap-4">
        <div className="border border-black p-2 mt-3 ">Forntend</div>
        <div className="border border-black p-2 mt-3 ">Backend</div>
        <div className="border border-black p-2 mt-3 ">API</div>
        <div className="border border-black p-2 mt-3 ">Database</div>
        </div>

        <div className="flex gap-4">
        <div className="border border-black p-2 mt-3 ">Auth</div>
        <div className="border border-black p-2 mt-3 ">Memberbase</div>
        <div className="border border-black p-2 mt-3 opacity-60">Search</div>
        <div className="border border-black p-2 mt-3 opacity-60">SEO</div>
        </div>

        <div className="flex gap-4">
        <div className="border border-black p-2 mt-3 ">Responsive</div>
        <div className="border border-black p-2 mt-3 ">Animation</div>
        <div className="border border-black p-2 mt-3 ">Hook</div>
        <div className="border border-black p-2 mt-3 ">Icon</div>
        
        
        </div>

        <div className="flex gap-4">
        <div className="border border-black p-2 mt-3 ">Desgin</div>
        <div className="border border-black p-2 mt-3 ">Plugin</div>
        <div className="border border-black p-2 mt-3 ">Docs</div>
        <div className="border border-black p-2 mt-3 ">Merging tech</div>
        </div>

        <div className="flex gap-4">
        <div className="border border-black p-2 mt-3 opacity-60">optimize</div>
        <div className="border border-black p-2 mt-3 opacity-60">Metadata</div>
        <div className="border border-black p-2 mt-3 opacity-60">Test</div>
        <div className="border border-black p-2 mt-3 opacity-60">Deploy</div>
        </div>


        <div className="flex gap-4">
        <div className="border border-black p-2 mt-3 opacity-60">AI</div>
        <div className="border border-black p-2 mt-3 opacity-60">Blochchain</div>
        </div>

          

      </div>
    </div>
  );
};

export default Conribute;
