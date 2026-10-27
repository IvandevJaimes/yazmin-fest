"use client";

import { Anther, Bloom, InkPath, Leaf, Stem, Sway, type BotanicalMotionProps } from "./motion";
import type { BotanicalPosition } from "./types";

type Props = BotanicalMotionProps & { position: BotanicalPosition };

export function LavenderWildflowers({ position, active, reducedMotion }: Props) {
  if (position === "top-center") {
    return (
      <g transform="scale(1 0.55)">
        <Sway active={active} cycle={8.1} delay={2.8} origin="50% 100%" reducedMotion={reducedMotion}>
          <Stem d="M 14 203 C 72 161 89 105 109 39" duration={2.25} ease={[0.32, 0, 0.12, 1]} />
          <Stem d="M 94 192 C 147 143 155 93 169 21" duration={2.05} delay={0.12} ease={[0.2, 0.6, 0.3, 1]} accent />
          <Stem d="M 185 203 C 206 139 209 89 207 19" duration={2.45} delay={0.24} ease={[0.48, 0, 0.22, 1]} />
          <Stem d="M 238 196 C 276 143 294 88 309 38" duration={1.95} delay={0.32} />
          <Stem d="M 308 199 C 337 160 356 115 380 69" duration={2.2} delay={0.2} accent />
          <Leaf d="M 61 162 C 40 147 25 151 22 164 C 37 178 52 175 61 162 Z" vein="M 59 163 Q 42 161 29 164" delay={0.36} />
          <Leaf d="M 127 162 C 147 145 163 147 169 159 C 157 174 141 176 127 162 Z" vein="M 130 163 Q 149 156 163 159" delay={0.44} accent />
          <Leaf d="M 249 166 C 230 151 215 155 213 168 C 227 180 242 178 249 166 Z" vein="M 247 167 Q 230 165 220 169" delay={0.52} />
          <Leaf d="M 329 157 C 346 138 363 140 369 152 C 358 167 342 171 329 157 Z" vein="M 332 158 Q 351 149 364 152" delay={0.6} accent />
        </Sway>

        <Sway active={active} cycle={5.7} delay={3.1} origin="52% 90%" reducedMotion={reducedMotion}>
          <g>
            <Bloom active={active} cycle={6.8} delay={1.4} origin="50% 90%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.26}>
              <g>
                <InkPath d="M 102 77 C 91 69 92 60 100 56 C 108 53 114 61 112 69 C 120 61 128 63 130 70 C 132 77 124 82 115 79 C 124 86 122 94 115 95 C 108 96 105 88 109 82 C 102 88 95 86 94 80 C 94 75 99 73 102 77 Z" width={0.8} />
                <InkPath d="M 101 62 C 94 57 96 49 102 47 C 108 45 112 52 110 57 C 116 52 122 54 122 59 C 122 65 116 68 111 65" width={0.75} accent />
                <InkPath d="M 104 88 C 96 86 94 79 99 76 C 104 73 110 77 109 82" width={0.7} />
                <Anther cx={113} cy={74} r={0.9} />
              </g>
            </Bloom>
            <Bloom active={active} cycle={4.2} delay={1.9} origin="50% 88%" reducedMotion={reducedMotion} reveal="bud" revealDelay={0.62}>
              <g>
                <InkPath d="M 164 65 C 157 59 159 52 165 50 C 171 48 175 54 173 59 C 180 55 184 59 182 64 C 180 69 173 69 170 65 C 171 72 165 75 161 71 C 158 68 160 64 164 65 Z" width={0.8} accent />
                <InkPath d="M 161 57 Q 169 57 174 62 M 162 66 Q 169 65 174 62" width={0.55} />
              </g>
            </Bloom>
            <Bloom active={active} cycle={8.1} delay={1.2} origin="50% 89%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.1}>
              <g>
                <InkPath d="M 202 119 C 190 109 190 96 200 90 C 211 84 220 96 217 109 C 226 94 241 93 247 103 C 253 113 242 124 227 123 C 241 132 239 145 228 149 C 216 153 210 139 216 128 C 204 139 191 136 188 126 C 185 117 195 112 202 119 Z" width={1} />
                <InkPath d="M 202 119 C 205 106 216 101 222 108 C 228 115 220 124 211 125 C 222 127 225 137 218 142 C 210 147 202 139 207 130" width={0.72} accent />
                <Anther cx={216} cy={122} r={1.25} />
                <Anther cx={222} cy={120} r={0.8} accent />
              </g>
            </Bloom>
            <Bloom active={active} cycle={5.7} delay={2.3} origin="50% 86%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.48}>
              <g>
                <InkPath d="M 301 87 C 286 81 283 67 291 61 C 301 54 311 62 309 74 C 316 62 328 63 331 72 C 334 81 324 87 314 84 C 322 93 316 103 307 101 C 298 99 297 90 301 87 Z" width={0.95} />
                <InkPath d="M 296 70 Q 306 76 312 83 M 308 64 Q 309 75 312 83 M 324 71 Q 317 78 312 83" width={0.65} accent />
                <Anther cx={312} cy={83} r={1} />
              </g>
            </Bloom>
            <Bloom active={active} cycle={4.2} delay={2.8} origin="50% 90%" reducedMotion={reducedMotion} reveal="bud" revealDelay={0.76}>
              <InkPath d="M 375 97 C 366 88 369 79 377 77 C 386 75 390 84 386 92 Q 382 99 377 105 Z" width={0.8} />
            </Bloom>
          </g>
        </Sway>
        <Bloom active={active} cycle={4.2} delay={1.7} origin="48% 80%" reducedMotion={reducedMotion} reveal="bud" revealDelay={0.42}>
          <g>
            <InkPath d="M 96 50 C 88 44 90 36 97 34 C 104 32 109 39 105 46 C 113 40 120 43 118 49 C 116 55 108 56 104 51 C 107 58 102 63 97 60 C 92 57 95 52 100 49 Z" width={0.72} accent />
            <InkPath d="M 107 39 C 101 33 104 27 110 26 C 116 25 120 31 117 36 C 123 33 128 37 126 42 C 124 46 118 47 114 43" width={0.68} />
            <InkPath d="M 91 64 C 83 59 85 52 91 50 C 97 48 101 54 98 60 C 105 56 110 60 108 65 C 106 70 100 70 96 66" width={0.65} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={6.8} delay={1.9} origin="50% 83%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.6}>
          <g>
            <InkPath d="M 158 37 C 151 31 154 23 160 22 C 166 21 170 27 167 33 C 174 29 179 33 177 38 C 175 43 169 43 165 39" width={0.68} />
            <InkPath d="M 171 50 C 164 45 166 38 172 36 C 179 34 183 41 179 47 C 186 43 191 47 189 52 C 187 57 180 57 177 53" width={0.68} accent />
            <InkPath d="M 151 57 C 144 52 147 45 153 44 C 159 43 163 49 160 54 C 167 51 171 55 169 60 C 167 64 161 65 157 60" width={0.65} />
          </g>
        </Bloom>
      </g>
    );
  }

  if (position === "bottom-center") {
    return (
      <g>
        <Sway active={active} cycle={6.8} delay={2.7} origin="50% 0%" reducedMotion={reducedMotion}>
          <Stem d="M 25 8 C 88 37 111 83 137 164" duration={1.8} ease={[0.25, 0.4, 0.15, 1]} />
          <Stem d="M 155 11 C 171 61 193 108 222 179" duration={2.3} delay={0.18} accent />
          <Stem d="M 388 10 C 344 52 321 97 294 180" duration={2.1} delay={0.08} />
          <Stem d="M 289 12 C 275 60 268 104 267 161" duration={1.65} delay={0.26} accent />
          <Leaf d="M 70 49 C 51 43 39 49 41 60 C 54 70 67 64 70 49 Z" vein="M 68 50 Q 54 56 46 59" delay={0.3} />
          <Leaf d="M 106 91 C 122 78 137 81 139 92 C 129 104 115 104 106 91 Z" vein="M 109 92 Q 125 87 135 91" delay={0.38} accent />
          <Leaf d="M 184 86 C 165 78 153 84 156 96 C 170 105 182 100 184 86 Z" vein="M 181 87 Q 168 91 161 95" delay={0.46} />
          <Leaf d="M 336 68 C 351 54 366 57 368 69 C 358 82 344 81 336 68 Z" vein="M 339 69 Q 353 64 364 68" delay={0.54} accent />
        </Sway>
        <Bloom active={active} cycle={8.1} delay={3.4} origin="52% 14%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.2}>
          <g>
            <InkPath d="M 122 169 C 109 155 112 139 123 135 C 135 130 143 145 137 157 C 150 145 165 150 165 162 C 166 174 152 180 140 170 C 148 185 139 195 129 191 C 119 187 120 176 126 168 C 113 178 102 173 103 163 C 104 154 115 153 122 169 Z" width={0.9} />
            <Anther cx={135} cy={165} r={1.1} accent />
          </g>
        </Bloom>
        <Bloom active={active} cycle={5.7} delay={1.8} origin="50% 12%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.5}>
          <g>
            <InkPath d="M 222 157 C 206 149 202 135 211 128 C 221 120 232 130 229 143 C 240 132 252 137 251 147 C 250 158 237 162 228 154 C 234 166 227 176 218 173 C 209 169 212 159 218 152 Z" width={0.85} accent />
            <InkPath d="M 215 141 Q 226 147 231 155 M 230 137 Q 229 148 231 155 M 244 145 Q 237 151 231 155" width={0.62} />
            <Anther cx={231} cy={155} r={0.9} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={4.2} delay={2.2} origin="50% 15%" reducedMotion={reducedMotion} reveal="bud" revealDelay={0.82}>
          <InkPath d="M 264 97 C 256 91 258 82 265 79 C 273 76 280 84 277 92 C 275 98 270 102 266 106 Z" width={0.8} />
        </Bloom>
        <Bloom active={active} cycle={6.8} delay={2.6} origin="50% 15%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.68}>
          <g>
            <InkPath d="M 296 168 C 286 155 290 144 299 142 C 308 140 314 151 309 159 C 320 152 329 158 326 166 C 323 174 313 175 307 168 C 311 179 304 185 297 181 C 290 177 293 170 299 165 Z" accent />
            <Anther cx={307} cy={165} r={0.8} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={8.1} delay={3.0} origin="48% 17%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.92}>
          <g>
            <InkPath d="M 141 69 C 132 74 128 88 134 96 C 140 103 154 101 159 94 C 165 85 157 74 149 69 C 151 80 147 88 142 88 C 136 87 137 77 141 69 Z" width={0.9} accent />
            <InkPath d="M 136 96 Q 145 91 156 97 M 141 88 Q 145 98 145 104" width={0.62} />
            <InkPath d="M 295 51 C 288 55 286 66 291 72 C 296 78 307 76 311 70 C 315 64 310 56 303 52 C 304 60 301 66 297 65 C 293 64 293 57 295 51 Z" width={0.78} />
            <InkPath d="M 292 71 Q 301 68 309 72" width={0.55} />
          </g>
        </Bloom>
      </g>
    );
  }

  if (position === "top-left") {
    return (
      <g>
        <Sway active={active} cycle={5.7} delay={2.4} origin="8% 100%" reducedMotion={reducedMotion}>
          <Stem d="M 4 228 C 23 183 50 137 78 71" duration={1.75} ease={[0.28, 0.04, 0.22, 1]} />
          <Stem d="M 15 230 C 54 194 83 166 127 121" duration={2.1} delay={0.18} accent />
          <Stem d="M 1 221 C 16 184 17 147 31 112" duration={1.6} delay={0.3} />
          <Leaf d="M 34 174 C 15 160 2 167 5 180 C 17 193 31 188 34 174 Z" vein="M 32 175 Q 17 173 8 179" delay={0.28} />
          <Leaf d="M 58 153 C 75 137 90 141 91 152 C 81 166 67 165 58 153 Z" vein="M 61 154 Q 77 147 87 151" delay={0.4} accent />
          <Leaf d="M 17 142 C 3 131 -8 137 -6 148 C 5 159 15 154 17 142 Z" vein="M 15 143 Q 4 142 -3 147" delay={0.52} />
          <Leaf d="M 95 139 C 81 126 70 130 72 141 C 82 153 92 149 95 139 Z" vein="M 93 139 Q 82 138 75 141" delay={0.62} accent />
        </Sway>
        <Bloom active={active} cycle={6.8} delay={1.8} origin="48% 90%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.18}>
          <g>
            <InkPath d="M 71 76 C 60 68 63 56 72 55 C 80 54 84 63 81 70 C 89 62 98 65 97 73 C 96 81 87 84 80 78 C 86 88 80 95 73 92 C 66 89 69 82 75 77 C 66 84 59 80 61 73 C 62 68 68 69 71 76 Z" width={0.82} />
            <InkPath d="M 72 64 Q 78 69 81 76 M 86 64 Q 83 71 81 76 M 93 72 Q 86 74 81 76" width={0.58} accent />
            <Anther cx={81} cy={76} r={0.9} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={4.2} delay={2.1} origin="50% 88%" reducedMotion={reducedMotion} reveal="bud" revealDelay={0.48}>
          <g>
            <InkPath d="M 124 122 C 115 115 119 105 126 105 C 133 105 136 112 132 118 Q 128 124 124 129 Z" width={0.78} accent />
            <InkPath d="M 122 119 Q 128 116 134 118" width={0.52} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={8.1} delay={2.8} origin="50% 88%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.68}>
          <g>
            <InkPath d="M 26 107 C 18 101 20 93 27 92 C 33 91 37 98 34 103 C 40 98 46 101 45 106 C 44 112 37 114 32 110 C 38 117 34 123 28 121 C 23 118 26 112 30 108 C 23 113 18 110 19 105 C 20 101 24 103 26 107 Z" width={0.72} />
            <Anther cx={32} cy={107} r={0.8} accent />
          </g>
        </Bloom>
      </g>
    );
  }

  if (position === "bottom-right") {
    return (
      <g>
        <Sway active={active} cycle={8.1} delay={2.9} origin="100% 100%" reducedMotion={reducedMotion}>
          <Stem d="M 166 230 C 142 188 127 146 101 77" duration={2.35} ease={[0.36, 0.02, 0.18, 1]} accent />
          <Stem d="M 160 230 C 126 199 94 176 48 141" duration={1.9} delay={0.16} />
          <Stem d="M 169 228 C 154 192 154 157 144 123" duration={1.65} delay={0.29} accent />
          <Leaf d="M 135 191 C 152 176 166 182 163 194 C 152 207 139 203 135 191 Z" vein="M 138 192 Q 151 187 160 192" delay={0.3} accent />
          <Leaf d="M 112 177 C 96 163 82 168 83 180 C 95 193 107 188 112 177 Z" vein="M 110 178 Q 96 175 87 180" delay={0.42} />
          <Leaf d="M 153 154 C 168 141 180 147 177 158 C 167 169 156 165 153 154 Z" vein="M 156 155 Q 168 151 175 156" delay={0.54} accent />
          <Leaf d="M 76 151 C 91 135 105 139 104 151 C 94 164 81 161 76 151 Z" vein="M 79 151 Q 92 145 101 150" delay={0.64} />
        </Sway>
        <Bloom active={active} cycle={5.7} delay={1.7} origin="50% 12%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.16}>
          <g>
            <InkPath d="M 96 81 C 84 69 88 57 98 58 C 106 59 108 68 103 75 C 113 69 121 74 118 82 C 115 90 105 91 99 84 C 104 96 96 102 89 98 C 82 94 87 86 93 82 C 82 88 75 83 78 76 C 80 70 87 74 90 79 Z" width={0.84} accent />
            <InkPath d="M 94 75 Q 102 78 105 86 M 111 76 Q 108 82 105 86 M 117 82 Q 110 84 105 86" width={0.56} />
            <Anther cx={105} cy={86} r={0.9} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={4.2} delay={2.4} origin="48% 15%" reducedMotion={reducedMotion} reveal="bud" revealDelay={0.52}>
          <g>
            <InkPath d="M 45 137 C 37 128 41 119 48 120 C 55 120 57 127 53 133 Q 49 139 45 144 Z" width={0.78} />
            <InkPath d="M 43 133 Q 50 130 56 133" width={0.52} accent />
          </g>
        </Bloom>
        <Bloom active={active} cycle={6.8} delay={3.1} origin="50% 12%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.76}>
          <g>
            <InkPath d="M 143 118 C 136 112 139 103 145 103 C 151 103 154 109 151 114 C 157 110 163 113 161 118 C 159 124 152 125 148 120 C 151 128 146 133 141 130 C 137 127 140 122 144 119 Z" width={0.7} />
            <Anther cx={149} cy={117} r={0.72} accent />
          </g>
        </Bloom>
      </g>
    );
  }

  return null;
}
