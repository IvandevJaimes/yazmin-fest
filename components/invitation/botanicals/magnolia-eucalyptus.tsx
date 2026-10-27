"use client";

import { Anther, Bloom, InkPath, Leaf, Stem, Sway, type BotanicalMotionProps } from "./motion";
import type { BotanicalPosition } from "./types";

type Props = BotanicalMotionProps & { position: BotanicalPosition };

export function MagnoliaEucalyptus({ position, active, reducedMotion }: Props) {
  if (position === "top-center") {
    return (
      <g>
        <Sway active={active} cycle={5.7} delay={2.8} origin="48% 5%" reducedMotion={reducedMotion}>
          <Stem d="M 17 16 C 75 58 108 90 146 185" duration={2.1} ease={[0.2, 0.7, 0.1, 1]} />
          <Stem d="M 402 12 C 349 51 320 103 282 185" duration={2.5} delay={0.16} ease={[0.36, 0.03, 0.15, 1]} accent />
          <Stem d="M 105 68 C 153 59 187 49 226 22" duration={1.55} delay={0.24} />
          <Leaf d="M 72 58 C 53 39 32 40 26 53 C 34 71 54 77 72 58 Z" vein="M 69 59 Q 48 54 33 53" delay={0.24} />
          <Leaf d="M 91 77 C 105 53 125 50 136 63 C 132 83 113 94 91 77 Z" vein="M 94 77 Q 117 62 130 65" delay={0.32} accent />
          <Leaf d="M 123 117 C 101 98 83 103 81 117 C 96 134 113 131 123 117 Z" vein="M 121 118 Q 100 115 88 119" delay={0.4} />
          <Leaf d="M 329 71 C 348 49 369 51 374 65 C 363 84 344 89 329 71 Z" vein="M 332 72 Q 353 62 368 64" delay={0.48} accent />
          <Leaf d="M 310 106 C 291 88 273 94 272 108 C 286 124 302 121 310 106 Z" vein="M 308 107 Q 289 105 278 110" delay={0.56} />
          <Leaf d="M 297 143 C 315 122 334 123 339 137 C 328 155 310 159 297 143 Z" vein="M 300 144 Q 320 134 334 137" delay={0.64} />
        </Sway>

        <Bloom active={active} cycle={8.1} delay={3.3} origin="51% 69%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.35}>
          <g>
            <InkPath d="M 207 120 C 192 98 180 67 193 52 C 205 39 218 60 217 94 C 227 59 246 42 258 56 C 269 70 248 100 224 121 C 258 101 286 102 289 118 C 292 136 261 141 226 130 C 260 151 272 178 259 188 C 246 198 228 171 218 137 C 220 174 202 198 187 192 C 172 186 183 154 207 128 C 179 151 149 151 145 135 C 141 119 172 109 204 120 C 174 101 163 75 177 67 C 190 59 207 83 214 111 Z" width={1.1} />
            <InkPath d="M 211 121 C 204 100 207 83 218 80 C 230 78 237 96 226 116 C 245 102 261 106 262 117 C 263 128 245 135 227 127 C 242 144 238 158 228 160 C 217 162 210 147 216 134 C 203 147 189 142 190 131 C 191 120 204 116 211 121 Z" accent />
            <InkPath d="M 211 122 Q 221 110 230 121 Q 225 133 211 122 Z" width={0.65} />
            <Anther cx={219} cy={122} r={1.15} accent />
            <Anther cx={225} cy={118} r={0.85} />
            <Anther cx={226} cy={125} r={0.75} />
            <Anther cx={216} cy={127} r={0.7} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={6.8} delay={1.7} origin="52% 78%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.7}>
          <g>
            <InkPath d="M 115 83 C 105 68 102 51 111 46 C 120 41 127 57 126 76 C 136 56 149 48 156 55 C 163 62 150 78 131 87 C 151 81 168 85 168 95 C 168 106 149 109 131 98 C 146 112 148 127 139 131 C 130 135 123 121 124 103 C 117 120 104 125 98 117 C 92 109 103 97 120 91 C 103 97 89 91 90 82 C 91 74 103 74 115 83 Z" width={0.9} accent />
            <InkPath d="M 116 86 Q 128 75 137 86 Q 131 98 116 86 Z" width={0.65} />
            <Anther cx={127} cy={87} r={0.9} />
          </g>
        </Bloom>

        <Bloom active={active} cycle={4.2} delay={2.1} origin="50% 70%" reducedMotion={reducedMotion} reveal="bud" revealDelay={1.05}>
          <InkPath d="M 287 70 C 277 61 279 49 288 45 C 298 41 305 52 301 63 C 298 70 293 76 289 81 Z" width={0.85} />
        </Bloom>
      </g>
    );
  }

  if (position === "bottom-left") {
    return (
      <g>
        <Sway active={active} cycle={6.8} delay={2.5} origin="0% 100%" reducedMotion={reducedMotion}>
          <Stem d="M 8 252 C 76 226 104 185 135 141 C 157 109 176 76 198 12" duration={2.3} ease={[0.25, 0.2, 0.2, 1]} />
          <Stem d="M 63 218 C 49 193 31 181 11 178" duration={1.6} delay={0.18} accent />
          <Stem d="M 126 154 C 105 140 83 139 64 150" duration={1.8} delay={0.29} />
          <Leaf d="M 38 239 C 26 218 11 215 2 225 C 8 242 23 249 38 239 Z" vein="M 36 239 Q 20 231 7 228" delay={0.22} accent />
          <Leaf d="M 62 216 C 69 193 86 187 97 198 C 94 216 78 226 62 216 Z" vein="M 64 216 Q 81 203 92 201" delay={0.3} />
          <Leaf d="M 87 195 C 68 181 51 188 50 202 C 64 216 80 211 87 195 Z" vein="M 85 196 Q 67 197 56 203" delay={0.38} accent />
          <Leaf d="M 116 166 C 121 144 137 135 148 144 C 148 161 135 174 116 166 Z" vein="M 118 166 Q 135 151 144 148" delay={0.46} />
          <Leaf d="M 145 127 C 127 115 111 121 111 134 C 124 147 139 143 145 127 Z" vein="M 143 128 Q 127 129 117 134" delay={0.54} accent />
          <Leaf d="M 170 89 C 177 69 193 62 204 71 C 202 88 189 98 170 89 Z" vein="M 172 89 Q 190 77 199 74" delay={0.62} />
        </Sway>
        <Bloom active={active} cycle={8.1} delay={3.1} origin="55% 54%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.24}>
          <g>
            <InkPath d="M 207 116 C 194 97 185 76 195 65 C 205 54 216 72 216 99 C 226 72 241 58 251 69 C 261 80 243 102 223 117 C 248 102 271 102 275 116 C 279 130 254 138 225 128 C 252 145 257 165 246 172 C 235 180 220 159 216 135 C 215 162 199 179 187 171 C 175 163 187 141 207 124 C 183 140 162 136 161 123 C 160 109 183 106 207 116 Z" width={1.05} />
            <InkPath d="M 207 119 C 202 100 208 87 219 86 C 230 85 234 101 224 114 C 240 105 251 110 250 120 C 249 131 234 134 222 126 C 234 139 229 150 220 151 C 211 151 207 139 214 129 C 203 138 192 133 193 124 C 194 115 203 113 207 119 Z" accent />
            <InkPath d="M 209 119 Q 219 108 227 118 Q 222 130 209 119 Z" width={0.65} />
            <Anther cx={217} cy={120} r={1.1} />
            <Anther cx={224} cy={117} r={0.85} accent />
            <Anther cx={224} cy={124} r={0.7} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={5.7} delay={1.8} origin="48% 64%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.62}>
          <g>
            <InkPath d="M 105 171 C 95 157 97 142 107 139 C 117 135 124 149 120 163 C 132 149 144 151 146 161 C 148 171 137 178 125 171 C 135 183 129 195 120 194 C 110 193 109 181 116 171 C 105 180 93 176 94 167 C 94 158 103 157 105 171 Z" width={0.8} accent />
            <Anther cx={119} cy={168} r={0.9} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={4.2} delay={2.2} origin="50% 69%" reducedMotion={reducedMotion} reveal="bud" revealDelay={1.0}>
          <InkPath d="M 60 95 C 51 87 54 77 62 74 C 71 71 77 81 73 91 Q 68 99 63 104 Z" width={0.8} accent />
        </Bloom>
      </g>
    );
  }

  if (position === "bottom-right") {
    return (
      <g>
        <Sway active={active} cycle={5.7} delay={2.7} origin="100% 100%" reducedMotion={reducedMotion}>
          <Stem d="M 333 251 C 286 219 263 179 228 146 C 195 115 162 83 130 11" duration={2.4} ease={[0.16, 0.7, 0.18, 1]} />
          <Stem d="M 274 209 C 294 188 315 177 339 178" duration={1.45} delay={0.2} accent />
          <Stem d="M 208 130 C 224 107 246 101 266 108" duration={1.85} delay={0.32} />
          <Leaf d="M 306 231 C 324 212 341 214 345 227 C 334 243 318 247 306 231 Z" vein="M 309 232 Q 328 223 339 227" delay={0.24} />
          <Leaf d="M 279 210 C 267 190 251 188 244 199 C 251 216 266 221 279 210 Z" vein="M 277 210 Q 260 201 250 201" delay={0.32} accent />
          <Leaf d="M 251 182 C 270 164 287 168 290 181 C 278 197 261 198 251 182 Z" vein="M 254 183 Q 273 176 285 180" delay={0.4} />
          <Leaf d="M 220 151 C 204 135 188 140 186 153 C 199 167 215 164 220 151 Z" vein="M 218 152 Q 202 151 191 154" delay={0.48} accent />
          <Leaf d="M 186 119 C 193 97 209 90 220 99 C 218 117 204 128 186 119 Z" vein="M 188 119 Q 205 104 214 102" delay={0.56} />
          <Leaf d="M 158 83 C 141 69 126 74 125 87 C 137 100 152 98 158 83 Z" vein="M 156 84 Q 140 84 131 88" delay={0.64} accent />
        </Sway>
        <Bloom active={active} cycle={8.1} delay={3.4} origin="48% 55%" reducedMotion={reducedMotion} reveal="turn" revealDelay={0.36}>
          <g>
            <InkPath d="M 142 123 C 129 102 124 82 136 72 C 148 62 158 81 153 107 C 167 82 184 74 193 86 C 202 98 182 116 161 124 C 188 115 210 123 210 138 C 209 153 184 156 162 139 C 183 160 183 180 170 185 C 157 190 146 170 151 145 C 142 170 123 180 113 169 C 103 158 120 139 142 132 C 117 141 99 131 103 117 C 106 103 129 109 142 123 Z" width={1.05} />
            <InkPath d="M 145 125 C 138 106 145 94 156 93 C 168 92 172 107 161 120 C 177 111 190 117 189 128 C 188 139 173 143 161 134 C 173 149 168 161 158 161 C 147 161 144 148 152 137 C 139 147 128 141 130 132 C 132 123 140 120 145 125 Z" accent />
            <Anther cx={156} cy={128} r={1.2} />
            <Anther cx={162} cy={124} r={0.8} accent />
            <Anther cx={164} cy={131} r={0.7} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={6.8} delay={1.6} origin="54% 60%" reducedMotion={reducedMotion} reveal="spring" revealDelay={0.69}>
          <g>
            <InkPath d="M 244 110 C 232 94 235 80 245 77 C 256 74 263 89 257 101 C 269 89 281 93 281 103 C 280 113 267 117 258 109 C 266 122 258 132 249 129 C 240 126 241 115 248 108 C 237 116 227 111 229 103 C 231 95 240 96 244 110 Z" accent />
            <Anther cx={254} cy={105} r={0.95} />
          </g>
        </Bloom>
        <Bloom active={active} cycle={4.2} delay={2.1} origin="51% 75%" reducedMotion={reducedMotion} reveal="bud" revealDelay={0.98}>
          <InkPath d="M 95 57 C 86 48 89 38 97 35 C 106 32 112 42 108 52 Q 103 60 98 66 Z" width={0.82} />
        </Bloom>
      </g>
    );
  }

  return null;
}
