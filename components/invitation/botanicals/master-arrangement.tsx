"use client";

import { Anther, Bloom, InkPath, Leaf, Stem, Sway, type BotanicalMotionProps } from "./motion";
import type { BotanicalPosition } from "./types";

type Props = BotanicalMotionProps & { position: BotanicalPosition };

export function MasterArrangement({ position, active, reducedMotion }: Props) {
  if (position === "top-center") {
    return (
      <g>
        <Sway active={active} cycle={8.1} delay={3.0} origin="50% 6%" reducedMotion={reducedMotion}>
          <Stem d="M 20 19 C 61 83 106 98 151 127 C 195 156 228 177 261 202" duration={2.35} ease={[0.25, 0.02, 0.2, 1]} />
          <Stem d="M 392 12 C 350 56 327 107 302 178 C 290 205 278 220 260 239" duration={2.5} delay={0.16} ease={[0.38, 0, 0.18, 1]} accent />
          <Stem d="M 143 120 C 119 91 96 69 72 48 C 52 30 39 21 25 16" duration={1.8} delay={0.23} />
          <Stem d="M 265 202 C 305 204 339 195 384 174" duration={1.65} delay={0.32} accent />
          <Stem d="M 197 154 C 188 115 191 77 218 36" duration={2.1} delay={0.28} />
          <Leaf d="M 67 73 C 47 57 30 63 28 77 C 43 92 59 87 67 73 Z" vein="M 64 74 Q 46 72 34 78" delay={0.2} />
          <Leaf d="M 99 98 C 105 75 121 68 133 78 C 131 96 118 107 99 98 Z" vein="M 102 98 Q 119 84 128 81" delay={0.28} accent />
          <Leaf d="M 163 139 C 145 121 127 126 126 141 C 140 156 156 153 163 139 Z" vein="M 160 140 Q 143 140 132 144" delay={0.36} />
          <Leaf d="M 222 157 C 230 135 247 130 258 140 C 255 157 241 167 222 157 Z" vein="M 225 157 Q 243 144 252 143" delay={0.44} accent />
          <Leaf d="M 323 119 C 309 101 292 104 289 117 C 300 133 317 132 323 119 Z" vein="M 320 120 Q 304 117 295 119" delay={0.52} />
          <Leaf d="M 333 179 C 341 158 357 151 368 161 C 365 178 351 188 333 179 Z" vein="M 335 179 Q 353 166 362 164" delay={0.6} accent />
        </Sway>

        <Sway active={active} cycle={5.7} delay={3.2} origin="50% 78%" reducedMotion={reducedMotion}>
          <Stem d="M 132 124 C 116 97 110 70 119 35" duration={1.85} delay={0.18} />
          <Stem d="M 285 112 C 273 84 276 58 296 30" duration={2.0} delay={0.25} accent />
          <Leaf d="M 116 87 C 98 75 84 80 84 93 C 97 106 111 102 116 87 Z" vein="M 114 88 Q 98 89 90 94" delay={0.4} />
          <Leaf d="M 286 79 C 301 61 317 63 321 75 C 311 90 297 94 286 79 Z" vein="M 289 80 Q 306 72 316 75" delay={0.48} />
        </Sway>

        <Bloom active={active} cycle={6.8} delay={3.8} origin="50% 70%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.32}>
          <g>
            <InkPath d="M 201 95 C 185 73 176 47 190 36 C 202 26 215 46 212 77 C 224 47 243 33 254 46 C 265 59 246 81 222 96 C 252 81 279 86 280 102 C 282 118 255 125 226 109 C 253 132 258 155 244 162 C 230 169 216 145 215 116 C 210 147 191 165 178 155 C 165 145 181 121 204 105 C 175 121 151 114 152 99 C 153 83 181 84 206 96 C 181 76 176 56 188 51 C 199 46 211 66 214 87 Z" width={1.1} />
            <InkPath d="M 205 97 C 194 81 198 65 208 62 C 219 59 226 75 219 90 C 235 76 250 81 250 92 C 250 103 234 108 222 100 C 237 116 231 130 221 130 C 211 130 207 116 215 105 C 201 117 187 111 189 101 C 191 91 202 90 205 97 Z" accent />
            <InkPath d="M 207 99 C 207 88 217 81 223 88 C 231 96 224 105 216 105" width={0.72} />
            <Anther cx={214} cy={98} r={1.4} accent />
            <Anther cx={221} cy={94} r={0.8} />
            <Anther cx={222} cy={101} r={0.85} />
            <Anther cx={215} cy={105} r={0.7} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={8.1} delay={1.7} origin="50% 78%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.76}>
          <g>
            <InkPath d="M 99 59 C 89 42 92 26 102 23 C 113 20 119 38 113 53 C 125 39 138 41 140 51 C 142 61 131 67 120 61 C 132 73 126 84 118 82 C 109 80 109 70 116 63 C 104 72 94 67 96 59 C 98 52 106 52 109 58 Z" width={0.9} accent />
            <InkPath d="M 111 58 C 110 49 117 44 122 49 C 127 54 123 60 118 61" width={0.62} />
            <Anther cx={117} cy={57} r={0.95} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={4.2} delay={2.1} origin="50% 84%" reducedMotion={reducedMotion} reveal="bud" revealDelay={1.0}>
          <InkPath d="M 293 53 C 285 44 288 34 296 31 C 304 28 310 37 306 46 Q 301 54 296 59 Z" width={0.82} />
        </Bloom>

        <Bloom active={active} cycle={5.7} delay={2.9} origin="50% 60%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.88}>
          <g>
            <InkPath d="M 321 137 C 312 119 312 95 322 81 C 336 94 337 116 326 137 Z" width={0.8} />
            <InkPath d="M 321 137 C 326 117 340 99 357 94 C 359 111 346 129 326 140 Z" width={0.8} accent />
            <InkPath d="M 321 137 C 340 124 363 122 378 131 C 368 146 348 151 326 141 Z" width={0.8} />
            <InkPath d="M 321 137 C 342 142 359 157 364 175 C 346 177 332 162 323 143 Z" width={0.8} accent />
            <InkPath d="M 321 137 C 332 156 333 179 323 195 C 309 182 308 160 319 138 Z" width={0.8} />
            <InkPath d="M 321 137 C 315 158 300 175 283 179 C 282 161 296 146 317 135 Z" width={0.8} accent />
            <InkPath d="M 321 137 C 302 150 279 151 264 142 C 274 126 294 122 316 133 Z" width={0.8} />
            <InkPath d="M 321 137 C 300 132 284 117 280 99 C 298 98 312 112 319 131 Z" width={0.8} accent />
            <InkPath d="M 316 137 Q 321 129 327 136 Q 327 145 319 145 Z" width={0.65} />
            <Anther cx={321} cy={136} r={1.5} accent />
            <Anther cx={315} cy={139} r={0.85} />
            <Anther cx={327} cy={140} r={0.85} />
            <Anther cx={320} cy={130} r={0.8} />
            <Anther cx={321} cy={146} r={0.8} accent />
          </g>
        </Bloom>
      </g>
    );
  }

  if (position === "bottom-center") {
    return (
      <g>
        <Sway active={active} cycle={6.8} delay={3.1} origin="50% 94%" reducedMotion={reducedMotion}>
          <Stem d="M 34 231 C 75 202 110 181 150 161 C 194 139 234 116 276 79 C 321 40 352 23 393 13" duration={2.55} ease={[0.34, 0.02, 0.2, 1]} />
          <Stem d="M 149 163 C 125 188 111 210 104 239" duration={1.75} delay={0.18} />
          <Stem d="M 251 100 C 246 70 251 43 270 18" duration={2.1} delay={0.26} accent />
          <Stem d="M 292 65 C 326 81 356 86 395 79" duration={1.9} delay={0.33} />
          <Leaf d="M 83 199 C 65 182 49 188 48 202 C 62 216 77 212 83 199 Z" vein="M 80 200 Q 63 200 54 204" delay={0.25} accent />
          <Leaf d="M 117 178 C 123 155 140 149 151 159 C 150 177 137 188 117 178 Z" vein="M 119 178 Q 138 164 146 162" delay={0.33} />
          <Leaf d="M 182 144 C 164 128 148 133 147 147 C 160 161 176 158 182 144 Z" vein="M 179 145 Q 163 145 153 150" delay={0.41} />
          <Leaf d="M 230 118 C 238 97 254 90 265 100 C 263 117 249 128 230 118 Z" vein="M 233 118 Q 250 104 260 102" delay={0.49} accent />
          <Leaf d="M 316 47 C 301 29 284 32 281 45 C 293 62 309 61 316 47 Z" vein="M 313 48 Q 297 45 287 47" delay={0.57} />
          <Leaf d="M 350 43 C 360 22 376 17 387 27 C 383 44 370 54 350 43 Z" vein="M 353 43 Q 371 30 381 29" delay={0.65} accent />
        </Sway>

        <Bloom active={active} cycle={8.1} delay={3.9} origin="47% 27%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.3}>
          <g>
            <InkPath d="M 270 121 C 255 101 248 78 260 68 C 271 58 283 76 280 104 C 291 77 308 63 319 75 C 330 87 312 108 289 121 C 317 108 341 113 343 128 C 345 143 321 149 292 136 C 317 157 320 178 307 185 C 294 192 281 170 280 143 C 274 171 257 186 245 176 C 233 166 248 145 270 130 C 244 143 223 136 224 122 C 225 108 249 109 274 120 Z" width={1.05} accent />
            <InkPath d="M 273 122 C 263 107 267 93 277 90 C 288 87 294 101 286 115 C 301 102 315 106 315 117 C 315 128 300 133 288 125 C 301 139 296 152 286 152 C 276 152 272 138 280 128 C 268 139 255 134 257 124 C 259 115 270 114 273 122 Z" width={0.83} />
            <InkPath d="M 275 124 C 276 113 286 108 292 115 C 299 122 292 131 284 131" width={0.62} />
            <Anther cx={282} cy={123} r={1.3} />
            <Anther cx={289} cy={119} r={0.85} accent />
            <Anther cx={290} cy={126} r={0.8} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={5.7} delay={1.8} origin="50% 25%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.68}>
          <g>
            <InkPath d="M 118 216 C 108 200 111 186 120 183 C 130 180 136 194 131 208 C 142 195 153 197 155 206 C 157 215 147 221 138 216 C 148 227 142 237 135 235 C 127 233 127 224 133 217 C 123 225 113 221 114 214 C 115 207 122 209 125 215 Z" width={0.85} />
            <Anther cx={133} cy={213} r={0.9} accent />
          </g>
        </Bloom>

        <Bloom active={active} cycle={4.2} delay={2.3} origin="50% 22%" reducedMotion={reducedMotion} reveal="bud" revealDelay={0.98}>
          <g>
            <InkPath d="M 102 125 C 94 116 97 106 105 103 C 113 100 119 109 115 118 Q 110 126 105 131 Z" width={0.8} accent />
            <InkPath d="M 100 122 Q 107 119 116 120" width={0.55} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={8.1} delay={2.6} origin="50% 45%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.62}>
          <g>
            <InkPath d="M 181 100 C 170 87 168 72 176 66 C 186 66 190 82 185 96 Z" width={0.75} accent />
            <InkPath d="M 181 100 C 186 85 198 75 209 77 C 210 89 198 99 184 102 Z" width={0.75} />
            <InkPath d="M 181 100 C 196 96 210 101 214 111 C 205 119 191 114 182 104 Z" width={0.75} accent />
            <InkPath d="M 181 100 C 190 112 190 127 182 135 C 172 129 173 113 179 103 Z" width={0.75} />
            <InkPath d="M 181 100 C 168 108 153 107 146 98 C 153 87 169 90 180 97 Z" width={0.75} accent />
            <Anther cx={181} cy={101} r={1.2} />
            <Anther cx={177} cy={102} r={0.75} accent />
            <Anther cx={184} cy={105} r={0.75} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={6.8} delay={2.0} origin="50% 25%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.82}>
          <g>
            <InkPath d="M 357 109 C 350 99 353 90 361 87 C 369 84 375 93 371 101 C 379 94 387 98 385 105 C 383 112 375 113 370 108 C 374 116 368 122 362 119 C 356 116 359 110 364 107" width={0.75} />
            <Anther cx={369} cy={105} r={0.75} />
          </g>
        </Bloom>
      </g>
    );
  }

  return null;
}
