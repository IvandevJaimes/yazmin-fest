"use client";

import { Anther, Bloom, InkPath, Leaf, Stem, Sway, type BotanicalMotionProps } from "./motion";
import type { BotanicalPosition } from "./types";

type Props = BotanicalMotionProps & { position: BotanicalPosition };

export function PeonyOlive({ position, active, reducedMotion }: Props) {
  if (position === "top-left") {
    return (
      <g>
        <Sway active={active} cycle={6.8} delay={2.6} origin="0% 0%" reducedMotion={reducedMotion}>
          <Stem d="M 8 7 C 63 16 86 52 122 75 S 206 121 324 253" duration={2.35} ease={[0.3, 0.02, 0.2, 1]} />
          <Stem d="M 74 42 C 68 65 53 77 28 82" duration={1.55} delay={0.16} />
          <Stem d="M 135 84 C 153 65 174 61 195 67" duration={1.9} delay={0.24} accent />
          <Leaf d="M 51 26 C 37 11 22 11 15 20 C 23 35 38 39 51 26 Z" vein="M 49 27 Q 34 25 20 21" delay={0.2} />
          <Leaf d="M 70 41 C 82 22 98 19 108 28 C 102 44 86 51 70 41 Z" vein="M 72 41 Q 91 31 104 29" delay={0.28} accent />
          <Leaf d="M 79 52 C 63 44 48 49 45 60 C 57 72 73 69 79 52 Z" vein="M 77 53 Q 60 56 50 60" delay={0.36} />
          <Leaf d="M 111 70 C 119 49 135 43 146 51 C 144 68 130 78 111 70 Z" vein="M 113 70 Q 131 57 141 53" delay={0.44} />
          <Leaf d="M 155 96 C 139 82 124 85 119 97 C 129 111 146 111 155 96 Z" vein="M 153 97 Q 135 96 124 98" delay={0.52} accent />
          <Leaf d="M 246 156 C 250 135 266 125 278 133 C 279 149 265 162 246 156 Z" vein="M 248 156 Q 264 142 273 136" delay={0.6} />
          <Leaf d="M 277 191 C 261 176 246 179 241 191 C 252 205 269 205 277 191 Z" vein="M 275 192 Q 257 190 246 192" delay={0.68} />
        </Sway>

        <Bloom active={active} cycle={5.7} delay={3.2} origin="50% 58%" reducedMotion={reducedMotion} revealDelay={0.42}>
          <g>
            <InkPath d="M 207 118 C 183 111 165 93 171 75 C 179 55 201 64 213 91 C 211 64 229 47 244 59 C 259 73 244 98 222 111 C 247 103 268 111 267 129 C 265 147 240 149 219 132 C 237 151 235 173 219 179 C 202 185 190 164 202 137 C 187 161 165 166 155 151 C 145 135 165 120 196 117 C 169 119 149 105 153 89 C 158 72 180 77 207 105 Z" width={1.1} />
            <InkPath d="M 207 119 C 191 106 188 91 198 84 C 210 77 222 91 218 108 C 232 93 247 96 251 107 C 254 119 239 128 222 124 C 237 137 234 151 223 154 C 211 157 204 143 211 130 C 198 142 184 138 183 127 C 183 117 197 113 207 119 Z" accent />
            <InkPath d="M 199 120 Q 210 108 218 120 Q 210 134 199 120 Z" width={0.75} />
            <Anther cx={208} cy={120} r={1.3} />
            <Anther cx={215} cy={117} r={0.9} accent />
            <Anther cx={214} cy={125} r={0.8} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={8.1} delay={1.3} origin="48% 66%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.86}>
          <g>
            <InkPath d="M 84 64 C 68 52 57 39 64 28 C 71 17 86 25 91 43 C 91 27 103 17 113 24 C 124 32 112 48 97 57 C 113 51 128 57 126 68 C 123 79 107 80 96 68 C 107 82 103 95 93 97 C 82 99 76 84 85 70 C 75 83 62 83 58 73 C 54 63 67 57 84 64 Z" width={0.9} accent />
            <InkPath d="M 86 64 Q 94 53 101 64 Q 95 74 86 64 Z" width={0.7} />
            <Anther cx={94} cy={64} r={1.05} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={4.2} delay={2.2} origin="50% 70%" reducedMotion={reducedMotion} reveal="bud" revealDelay={1.15}>
          <g>
            <InkPath d="M 287 204 C 280 193 282 180 292 175 C 303 170 313 181 309 193 C 306 204 298 211 291 216 C 289 211 288 208 287 204 Z" width={0.9} />
            <InkPath d="M 284 207 Q 297 201 309 202 M 294 194 Q 299 188 304 186" width={0.65} accent />
          </g>
        </Bloom>
      </g>
    );
  }

  if (position === "bottom-right") {
    return (
      <g>
        <Sway active={active} cycle={5.7} delay={2.9} origin="100% 100%" reducedMotion={reducedMotion}>
          <Stem d="M 334 253 C 281 224 267 188 230 167 C 186 142 144 114 18 9" duration={2.5} ease={[0.22, 0.08, 0.18, 1]} />
          <Stem d="M 264 201 C 243 206 225 222 219 244" duration={1.45} delay={0.18} accent />
          <Stem d="M 185 137 C 180 113 188 94 209 81" duration={1.75} delay={0.32} />
          <Leaf d="M 305 233 C 319 215 334 214 341 226 C 334 242 319 247 305 233 Z" vein="M 307 233 Q 324 223 337 226" delay={0.18} />
          <Leaf d="M 284 215 C 268 204 254 207 251 219 C 263 231 278 230 284 215 Z" vein="M 282 216 Q 265 217 256 220" delay={0.26} accent />
          <Leaf d="M 253 193 C 261 173 276 167 286 176 C 284 192 271 202 253 193 Z" vein="M 255 193 Q 272 181 281 178" delay={0.34} />
          <Leaf d="M 226 167 C 210 154 195 158 192 170 C 204 183 220 181 226 167 Z" vein="M 224 168 Q 208 168 198 171" delay={0.42} accent />
          <Leaf d="M 196 146 C 202 126 216 118 227 127 C 226 143 214 153 196 146 Z" vein="M 198 146 Q 214 133 222 130" delay={0.5} />
          <Leaf d="M 165 120 C 149 108 135 113 134 125 C 146 137 160 135 165 120 Z" vein="M 163 121 Q 148 122 140 126" delay={0.58} />
        </Sway>

        <Bloom active={active} cycle={8.1} delay={3.3} origin="48% 54%" reducedMotion={reducedMotion} revealDelay={0.38}>
          <g>
            <InkPath d="M 143 139 C 123 126 114 106 124 92 C 137 78 153 91 157 116 C 162 91 182 81 193 95 C 205 111 187 129 164 136 C 189 131 209 143 204 160 C 198 177 174 174 157 154 C 172 178 165 198 148 199 C 131 201 126 178 143 157 C 124 176 103 173 99 157 C 95 140 117 132 143 139 Z" width={1.1} accent />
            <InkPath d="M 146 140 C 132 127 133 112 144 106 C 155 101 164 115 158 130 C 174 119 187 124 187 136 C 186 148 171 153 158 145 C 170 158 165 171 154 172 C 143 173 139 159 147 149 C 133 158 120 153 122 143 C 124 134 138 133 146 140 Z" />
            <InkPath d="M 144 143 Q 153 131 161 141 Q 156 154 144 143 Z" width={0.75} accent />
            <Anther cx={152} cy={142} r={1.25} accent />
            <Anther cx={158} cy={139} r={0.8} />
            <Anther cx={157} cy={146} r={0.8} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={6.8} delay={1.6} origin="50% 65%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.72}>
          <g>
            <InkPath d="M 213 91 C 199 82 193 68 201 58 C 210 47 222 58 224 75 C 229 58 243 52 251 62 C 260 73 247 85 231 89 C 249 88 259 98 254 109 C 248 119 234 114 225 101 C 234 117 227 127 217 126 C 207 124 207 110 216 100 C 203 108 192 103 193 94 C 194 85 205 84 213 91 Z" width={0.85} />
            <Anther cx={222} cy={92} r={0.95} accent />
          </g>
        </Bloom>

        <Bloom active={active} cycle={4.2} delay={2.5} origin="50% 70%" reducedMotion={reducedMotion} reveal="bud" revealDelay={1.02}>
          <InkPath d="M 52 38 C 42 28 43 17 51 12 C 60 7 68 17 64 27 C 62 33 57 38 52 43 C 52 41 52 40 52 38 Z" width={0.9} accent />
        </Bloom>
      </g>
    );
  }

  return null;
}
