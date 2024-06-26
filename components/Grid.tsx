import { gridItems } from '@/data'
import { BentoGridItem } from './ui/BentoGrid'
import { BentoGrid } from './ui/cheaking'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full  py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
      {/* <h1>Hello</h1> */}
    </section>
  )
}

export default Grid
