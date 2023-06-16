import clsx from "clsx";

type ICardAboutValue = {
  label: string;
  href?: string;
}

function CardAboutValue({ label, href }: ICardAboutValue) {
  return (
    <a 
      href={href} 
      className={clsx(`
        flex 
        items-center 
        justify-center 
        p-16 text-center 
        border 
        border-zinc-800 
        max-h-32 
        rounded-lg
        `, href ? 'hover:bg-zinc-800' : '')}>
      <span className="text-base font-semibold">
        {label}
      </span>
    </a>
  );
}

export default CardAboutValue;
