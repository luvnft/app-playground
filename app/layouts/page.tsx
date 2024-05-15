import { ExternalLink } from '#/ui/external-link';

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">How to start</h1>

      <ul>
        <li>
          The first step to onboarding to Web5 is to subscribe to the premium
          Discord that you love the most with the goal to learn blockchain in
          a fun way by completing daily quests, earning XP points to level up
          the leader board while earning Love Money that you can spend IRL.
        </li>
        <li>Introduce yourself in the #intro channel to let your tribe know your
          purpose to align with like-hearted people around the world who are on
          the same journey as you are.
        </li>
        <li>Claim your Love Money ($LUV and a LUV NFT) in the #love-money channel
          once you complete all of the Quests to learn how Web5 works.
        </li>
        <li>Market your business for Love Money or promote your LUV NFT to accept 
          crypto for your business securely in the channel that is relevant to your 
          LUV NFT.
        </li>
      </ul>

      <div className="flex gap-2">
        <ExternalLink href="https://nftv.luvnft.com">
          NFTV
        </ExternalLink>
        <ExternalLink href="https://discord.com/servers/healxyz-1165931081564946443 ">
          HealXYZ
        </ExternalLink>
        <ExternalLink href="https://discord.com/servers/arvrtise-1034757895268618260">
          Arvrtise
        </ExternalLink>
        <ExternalLink href="https://discord.com/servers/reel-comedy-1171392373994033162">
          Reel Comedy
        </ExternalLink>
        <ExternalLink href="https://discord.com/servers/cre-1163344441436819497">
          CRE CLUB
        </ExternalLink>
        <ExternalLink href="https://discord.com/servers/hair-1188100125705375806">
          HAIR
        </ExternalLink>
      </div>
    </div>
  );
}
