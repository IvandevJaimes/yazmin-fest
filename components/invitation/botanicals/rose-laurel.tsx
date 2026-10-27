"use client";

import { Bloom, InkPath, Leaf, Stem, Sway, type BotanicalMotionProps } from "./motion";
import type { BotanicalPosition } from "./types";

type Props = BotanicalMotionProps & { position: BotanicalPosition };

const RoseBloom = ({
  active,
  reducedMotion,
  cycle,
  delay,
  revealDelay,
  children,
}: BotanicalMotionProps & {
  cycle: 4.2 | 5.7 | 6.8 | 8.1;
  delay: number;
  revealDelay: number;
  children: React.ReactNode;
}) => (
  <Bloom
    active={active}
    cycle={cycle}
    delay={delay}
    origin="50% 76%"
    reducedMotion={reducedMotion}
    reveal="bud"
    revealDelay={revealDelay}
  >
    {children}
  </Bloom>
);

export function RoseLaurel({ position, active, reducedMotion }: Props) {
  if (position === "top-left") {
    return (
      <g>
        <Sway active={active} cycle={6.8} delay={2.8} origin="0% 0%" reducedMotion={reducedMotion}>
          <Stem d="M 8 10 C 78 22 107 68 157 101 C 208 135 250 175 327 249" duration={2.5} ease={[0.28, 0.03, 0.16, 1]} />
          <Stem d="M 72 39 C 57 57 39 64 19 61" duration={1.6} delay={0.18} accent />
          <Stem d="M 136 88 C 148 65 169 54 193 56" duration={1.9} delay={0.31} />
          <Leaf d="M 48 26 C 34 12 20 14 15 25 C 24 38 38 40 48 26 Z" vein="M 45 27 Q 31 25 21 26" delay={0.2} />
          <Leaf d="M 83 48 C 92 28 107 23 117 33 C 115 49 101 58 83 48 Z" vein="M 85 48 Q 103 35 112 35" delay={0.28} accent />
          <Leaf d="M 105 65 C 88 54 74 60 73 72 C 85 84 101 80 105 65 Z" vein="M 102 66 Q 86 67 78 72" delay={0.36} />
          <Leaf d="M 160 103 C 165 81 181 72 193 81 C 193 98 179 110 160 103 Z" vein="M 162 103 Q 180 89 188 84" delay={0.44} accent />
          <Leaf d="M 194 129 C 178 116 162 121 162 134 C 175 147 190 143 194 129 Z" vein="M 192 130 Q 177 130 168 135" delay={0.52} />
          <Leaf d="M 254 177 C 260 156 276 149 287 158 C 285 175 271 185 254 177 Z" vein="M 257 177 Q 273 164 282 161" delay={0.6} />
          <Leaf d="M 286 209 C 270 197 255 202 256 215 C 269 227 283 223 286 209 Z" vein="M 284 210 Q 269 210 261 216" delay={0.68} accent />
        </Sway>
        <RoseBloom active={active} cycle={8.1} delay={3.4} revealDelay={0.48} reducedMotion={reducedMotion}>
          <g>
            <InkPath d="M 200 113 C 184 102 181 87 192 80 C 201 74 210 81 213 94 C 218 78 232 73 240 82 C 248 90 241 101 227 106 C 246 102 258 111 254 122 C 250 133 235 133 223 123 C 238 138 235 151 224 154 C 213 157 207 146 210 132 C 202 148 188 151 182 142 C 176 133 184 121 198 117 C 181 121 170 112 174 103 C 178 94 192 99 200 113 Z" width={1.05} />
            <InkPath d="M 204 112 C 195 100 200 91 208 91 C 216 91 220 101 214 109 C 225 100 233 105 231 112 C 229 119 219 121 213 115 C 219 125 213 132 206 129 C 200 126 202 118 207 114 C 198 120 191 115 194 109 C 196 104 202 106 204 112 Z" accent />
            <InkPath d="M 202 112 C 203 106 208 104 212 108 C 215 112 211 117 207 117" width={0.65} />
          </g>
        </RoseBloom>
        <RoseBloom active={active} cycle={5.7} delay={1.6} revealDelay={0.76} reducedMotion={reducedMotion}>
          <g>
            <InkPath d="M 91 62 C 79 54 80 43 88 39 C 96 35 103 41 104 51 C 108 39 118 36 123 43 C 129 51 120 59 110 61 C 122 62 127 70 121 77 C 115 83 107 78 106 68 C 105 79 97 84 91 79 C 85 74 90 67 98 63 C 88 68 80 64 82 58 C 84 53 91 55 91 62 Z" width={0.9} accent />
            <InkPath d="M 98 62 Q 99 53 107 55 Q 112 62 103 66 Q 99 66 98 62 Z" width={0.65} />
          </g>
        </RoseBloom>
        <RoseBloom active={active} cycle={4.2} delay={2.2} revealDelay={1.04} reducedMotion={reducedMotion}>
          <InkPath d="M 287 204 C 279 195 282 184 290 180 C 299 176 306 185 302 195 Q 297 205 290 211 Z" width={0.85} />
        </RoseBloom>
      </g>
    );
  }

  if (position === "top-right") {
    return (
      <g>
        <Sway active={active} cycle={5.7} delay={2.5} origin="100% 0%" reducedMotion={reducedMotion}>
          <Stem d="M 333 8 C 274 22 244 54 216 92 C 187 132 145 174 12 254" duration={2.2} ease={[0.36, 0.04, 0.15, 1]} />
          <Stem d="M 272 37 C 287 54 307 61 329 57" duration={1.75} delay={0.21} accent />
          <Stem d="M 201 109 C 184 88 162 83 140 92" duration={1.6} delay={0.34} />
          <Leaf d="M 293 25 C 307 10 323 12 328 24 C 318 37 303 39 293 25 Z" vein="M 296 26 Q 311 24 322 25" delay={0.22} accent />
          <Leaf d="M 259 48 C 250 27 235 23 225 33 C 227 49 242 58 259 48 Z" vein="M 257 48 Q 240 35 230 35" delay={0.3} />
          <Leaf d="M 234 71 C 251 59 266 66 266 78 C 253 90 238 86 234 71 Z" vein="M 236 72 Q 252 73 261 78" delay={0.38} accent />
          <Leaf d="M 182 125 C 175 104 159 98 148 107 C 149 124 163 135 182 125 Z" vein="M 180 125 Q 164 112 154 110" delay={0.46} />
          <Leaf d="M 150 150 C 166 136 181 141 183 154 C 172 168 156 166 150 150 Z" vein="M 153 151 Q 170 149 178 154" delay={0.54} accent />
          <Leaf d="M 84 196 C 77 176 62 170 51 180 C 52 197 67 207 84 196 Z" vein="M 82 196 Q 66 183 57 183" delay={0.62} />
        </Sway>
        <RoseBloom active={active} cycle={6.8} delay={3.3} revealDelay={0.42} reducedMotion={reducedMotion}>
          <g>
            <InkPath d="M 125 142 C 111 132 112 118 122 112 C 132 106 141 113 141 126 C 148 112 161 110 167 119 C 173 128 163 138 150 140 C 167 140 175 150 169 160 C 163 169 150 164 145 153 C 149 168 140 177 131 172 C 122 168 125 157 133 148 C 121 157 110 153 112 144 C 114 135 125 137 125 142 Z" width={0.95} accent />
            <InkPath d="M 132 141 C 126 131 131 123 138 124 C 145 125 147 134 141 140 C 150 133 158 138 155 145 C 152 151 144 151 140 145 C 144 155 137 160 132 156 C 127 152 131 146 136 143" width={0.7} />
          </g>
        </RoseBloom>
        <RoseBloom active={active} cycle={8.1} delay={1.5} revealDelay={0.78} reducedMotion={reducedMotion}>
          <g>
            <InkPath d="M 251 61 C 241 53 244 43 251 40 C 259 37 265 45 262 53 C 271 46 279 50 277 57 C 275 64 266 65 260 59 C 265 68 259 74 253 71 C 247 68 250 62 255 58 Z" width={0.85} />
            <InkPath d="M 254 57 Q 254 50 260 50 Q 265 55 259 60" width={0.6} accent />
          </g>
        </RoseBloom>
        <RoseBloom active={active} cycle={4.2} delay={2.3} revealDelay={1.08} reducedMotion={reducedMotion}>
          <InkPath d="M 48 211 C 40 202 43 193 51 190 C 59 188 65 196 61 205 Q 56 213 51 218 Z" width={0.8} accent />
        </RoseBloom>
      </g>
    );
  }

  if (position === "bottom-left") {
    return (
      <g>
        <Sway active={active} cycle={8.1} delay={2.9} origin="0% 100%" reducedMotion={reducedMotion}>
          <Stem d="M 9 249 C 50 218 87 181 123 149 C 157 118 186 73 213 10" duration={2.6} ease={[0.3, 0.05, 0.1, 1]} />
          <Stem d="M 63 204 C 43 189 25 185 8 192" duration={1.55} delay={0.16} />
          <Stem d="M 137 137 C 118 118 98 114 77 121" duration={1.9} delay={0.27} accent />
          <Leaf d="M 39 224 C 29 205 14 200 4 209 C 9 226 23 235 39 224 Z" vein="M 37 224 Q 22 215 11 212" delay={0.22} />
          <Leaf d="M 73 198 C 81 178 97 173 107 183 C 104 199 89 209 73 198 Z" vein="M 75 198 Q 93 186 102 185" delay={0.3} accent />
          <Leaf d="M 104 169 C 88 156 73 161 72 174 C 84 187 100 184 104 169 Z" vein="M 101 170 Q 85 170 77 175" delay={0.38} />
          <Leaf d="M 159 116 C 164 95 180 87 191 96 C 190 112 177 124 159 116 Z" vein="M 161 116 Q 178 102 186 99" delay={0.46} accent />
          <Leaf d="M 188 78 C 171 65 157 70 157 83 C 169 96 184 92 188 78 Z" vein="M 186 79 Q 170 79 163 84" delay={0.54} />
        </Sway>
        <RoseBloom active={active} cycle={5.7} delay={3.2} revealDelay={0.38} reducedMotion={reducedMotion}>
          <g>
            <InkPath d="M 214 111 C 199 101 201 86 211 80 C 221 74 230 82 230 95 C 236 81 250 78 257 87 C 264 96 254 107 240 109 C 258 108 267 118 261 128 C 255 138 240 134 234 123 C 240 139 231 147 222 143 C 213 139 216 128 224 118 C 212 127 201 123 203 114 C 205 105 215 106 214 111 Z" width={0.95} />
            <InkPath d="M 220 110 C 214 101 219 94 226 95 C 233 96 234 104 228 109 C 237 104 243 109 240 115 C 237 120 230 119 227 114 C 230 123 224 128 219 124 C 215 121 218 115 223 112" width={0.68} accent />
          </g>
        </RoseBloom>
        <RoseBloom active={active} cycle={6.8} delay={1.7} revealDelay={0.72} reducedMotion={reducedMotion}>
          <g>
            <InkPath d="M 92 135 C 81 127 83 116 91 112 C 99 108 106 114 106 124 C 111 113 122 112 127 119 C 132 127 124 135 113 136 C 127 138 132 146 127 154 C 121 161 111 157 108 148 C 111 160 104 165 97 162 C 90 159 93 151 99 144 C 90 150 82 147 83 140 C 84 134 92 131 92 135 Z" width={0.82} accent />
            <InkPath d="M 98 136 C 96 129 102 125 106 130 C 111 135 106 141 102 141 Q 96 140 98 136 Z" width={0.55} />
          </g>
        </RoseBloom>
        <RoseBloom active={active} cycle={4.2} delay={2.4} revealDelay={1.02} reducedMotion={reducedMotion}>
          <InkPath d="M 54 81 C 46 72 49 63 57 60 C 65 57 71 66 67 75 Q 62 83 57 88 Z" width={0.8} />
        </RoseBloom>
      </g>
    );
  }

  if (position === "bottom-right") {
    return (
      <g>
        <Sway active={active} cycle={6.8} delay={2.6} origin="100% 100%" reducedMotion={reducedMotion}>
          <Stem d="M 333 251 C 283 218 257 181 222 146 C 188 111 158 71 129 10" duration={2.35} ease={[0.25, 0.12, 0.12, 1]} />
          <Stem d="M 279 214 C 301 197 321 192 339 198" duration={1.7} delay={0.2} accent />
          <Stem d="M 208 132 C 222 108 243 98 264 101" duration={1.75} delay={0.34} />
          <Leaf d="M 308 230 C 321 210 338 211 344 223 C 336 241 320 247 308 230 Z" vein="M 310 231 Q 328 222 338 224" delay={0.24} accent />
          <Leaf d="M 280 211 C 268 191 251 190 244 202 C 251 219 267 223 280 211 Z" vein="M 278 211 Q 261 202 250 204" delay={0.32} />
          <Leaf d="M 252 182 C 272 165 287 170 288 183 C 277 198 261 198 252 182 Z" vein="M 255 183 Q 274 176 284 182" delay={0.4} accent />
          <Leaf d="M 218 149 C 202 132 186 137 185 150 C 198 165 213 163 218 149 Z" vein="M 216 150 Q 200 149 191 152" delay={0.48} />
          <Leaf d="M 186 114 C 193 93 208 86 219 95 C 218 112 204 123 186 114 Z" vein="M 188 114 Q 205 100 214 99" delay={0.56} accent />
          <Leaf d="M 157 79 C 140 66 125 71 125 84 C 137 97 152 94 157 79 Z" vein="M 155 80 Q 139 81 131 85" delay={0.64} />
        </Sway>
        <RoseBloom active={active} cycle={8.1} delay={3.4} revealDelay={0.44} reducedMotion={reducedMotion}>
          <g>
            <InkPath d="M 127 128 C 112 118 114 103 124 97 C 134 91 144 99 143 113 C 150 99 164 96 170 105 C 176 114 165 125 151 127 C 169 126 178 136 172 146 C 166 156 151 152 146 141 C 151 156 142 165 133 161 C 124 157 127 146 135 136 C 123 145 112 141 114 132 C 116 123 128 124 127 128 Z" width={1} accent />
            <InkPath d="M 134 128 C 128 119 133 111 140 112 C 147 113 149 121 143 127 C 152 121 159 125 157 132 C 155 139 146 139 142 133 C 146 142 139 147 134 143 C 129 139 133 133 138 130" width={0.68} />
          </g>
        </RoseBloom>
        <RoseBloom active={active} cycle={5.7} delay={1.6} revealDelay={0.74} reducedMotion={reducedMotion}>
          <g>
            <InkPath d="M 247 96 C 237 88 240 78 248 75 C 256 72 262 80 258 89 C 267 82 276 86 274 93 C 272 100 263 101 258 95 C 262 104 256 109 250 106 C 244 103 247 97 252 93 Z" width={0.82} />
            <InkPath d="M 251 94 C 250 88 255 85 259 88 C 263 91 260 96 256 97" width={0.55} accent />
          </g>
        </RoseBloom>
        <RoseBloom active={active} cycle={4.2} delay={2.2} revealDelay={1.04} reducedMotion={reducedMotion}>
          <InkPath d="M 78 194 C 70 184 73 175 81 172 C 90 169 95 178 91 187 Q 86 196 81 201 Z" width={0.82} accent />
        </RoseBloom>
      </g>
    );
  }

  return null;
}
