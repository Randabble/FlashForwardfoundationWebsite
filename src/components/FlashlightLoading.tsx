import * as React from "react"
import { motion } from "framer-motion"
import { Flashlight } from "lucide-react"

interface FlashlightLoadingProps {
    text?: string
    size?: number
}

const FlashlightLoading: React.FC<FlashlightLoadingProps> = ({
    text = "Loading...",
    size = 80
}) => {
    return (
        <div className="fixed inset-0 z-50 flex min-h-screen w-full items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-8">
                <div className="relative" style={{ width: size, height: size }}>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <Flashlight
                            size={size}
                            className="text-yellow-500"
                            strokeWidth={1.5}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div
                            className="rounded-full bg-primary/20 blur-xl"
                            style={{ width: size * 0.8, height: size * 0.8 }}
                        />
                    </motion.div>

                    <motion.div
                        className="absolute left-1/2 top-0 h-full w-1 origin-top -translate-x-1/2"
                        style={{
                            background: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.8), transparent)",
                            filter: "blur(8px)",
                        }}
                        animate={{
                            rotate: [0, 360],
                            scaleY: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />

                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30"
                            style={{ width: size * 0.3, height: size * 0.3 }}
                        />
                    </motion.div>
                </div>

                <motion.div
                    className="bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)] bg-[length:200%_100%] bg-clip-text text-2xl font-semibold text-transparent"
                    initial={{ backgroundPosition: "200% 0" }}
                    animate={{ backgroundPosition: "-200% 0" }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }}
                >
                    {text}
                </motion.div>

                <div className="flex gap-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            className="h-2 w-2 rounded-full bg-yellow-500"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FlashlightLoading
