import { Listbox, Transition} from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";

const Select = ({ data }) => {
  const [selected, setSelected] = useState(data[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="selector" style={{width:"104px"}}>
      <Listbox.Button>
      <span>
      <Image src={selected?.icon}  width={25} height={25}/> 
      </span>
          <span className="">{selected?.name}</span>
        </Listbox.Button>
        <Transition as={Fragment}>
          <Listbox.Options>
            {data.map((itm) => (
              <Listbox.Option key={itm.id} value={itm}>
                {({ selected }) => (
                  <span className={selected ? "selected fw-bold" : ""}>
                    {itm.name}
                    {selected}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
