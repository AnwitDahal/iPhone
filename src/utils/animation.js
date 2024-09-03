import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const animateWithGSAPTimeline=(timeline,rotationRef,rotationState,FirstTarget,SecondTarget,animationprops)=>{
    timeline.to(rotationRef.current.rotation,{
        y:rotationState,
        duration:1,
        ease:'power2.inOut'
    })

    timeline.to(
        FirstTarget,
        {
            ...animationprops,
            ease:'power2.inOut',
        },
        '<'
    )

    timeline.to(
        SecondTarget,
        {
            ...animationprops,
            ease:'power2.inOut',
        },
        '<'
    )
}

export const animateWithGSAP=(target,animationprops,scrollProps)=>{
    gsap.to(target,{
        ...animationprops,
        scrollTrigger:{
            trigger:target,
            toggleActions:'restart reverse restart reverse',
            start:'top 85%',
            ...scrollProps
        }
    })
}