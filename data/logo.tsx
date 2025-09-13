import { HTMLChakraProps, chakra, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff')
  return (
   <chakra.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 172" {...props}>
  <image
    href="/static/images/social society.png"
    x="10"
    y="-160"
    height="500"
    width="500"
  />
   
</chakra.svg>

  )
}
