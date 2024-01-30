export interface OsuCookie {
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number;
    size: number;
    httpOnly: boolean;
    secure: boolean;
    session: boolean;
    sameParty: boolean;
    sourceScheme: string;
    sourcePort: number;
}

export type UserResponse =
    | { authentication: "basic" }
    | {
          avatar_url: string;
          country_code: string;
          default_group: string;
          id: number;
          is_active: boolean;
          is_bot: boolean;
          is_deleted: boolean;
          is_online: boolean;
          is_supporter: boolean;
          last_visit: string;
          pm_friends_only: boolean;
          profile_colour: string;
          username: string;
          cover_url: string;
          discord: string;
          has_supported: boolean;
          interests: null;
          join_date: string;
          kudosu: {
              total: number;
              available: number;
          };
          location: null;
          max_blocks: number;
          max_friends: number;
          occupation: null;
          playmode: string;
          playstyle: Array<string>;
          post_count: number;
          profile_order: Array<string>;
          title: null;
          twitter: string;
          website: string;
          country: {
              code: string;
              name: string;
          };
          cover: {
              custom_url: string;
              url: string;
              id: null;
          };
          is_restricted: boolean;
          account_history: [];
          active_tournament_banner: null;
          badges: Array<{
              awarded_at: string;
              description: string;
              "image@2x_url": string;
              image_url: string;
              url: string;
          }>;
          favourite_beatmapset_count: number;
          follower_count: number;
          graveyard_beatmapset_count: number;
          groups: Array<{
              id: number;
              identifier: string;
              name: string;
              short_name: string;
              description: string;
              colour: string;
          }>;
          loved_beatmapset_count: number;
          monthly_playcounts: Array<{
              start_date: string;
              count: number;
          }>;
          page: {
              html: string;
              raw: string;
          };
          pending_beatmapset_count: number;
          previous_usernames: Array<string>; // You might want to define a specific type for usernames
          ranked_beatmapset_count: number;
          replays_watched_counts: Array<{
              start_date: string;
              count: number;
          }>;
          scores_first_count: number;
          statistics: {
              level: {
                  current: number;
                  progress: number;
              };
              pp: number;
              global_rank: number;
              ranked_score: number;
              hit_accuracy: number;
              play_count: number;
              play_time: number;
              total_score: number;
              total_hits: number;
              maximum_combo: number;
              replays_watched_by_others: number;
              is_ranked: boolean;
              grade_counts: {
                  ss: number;
                  ssh: number;
                  s: number;
                  sh: number;
                  a: number;
              };
              rank: {
                  global: number;
                  country: number;
              };
          };
          support_level: number;
          user_achievements: Array<{
              achieved_at: string;
              achievement_id: number;
          }>;
          rank_history: {
              mode: string;
              data: Array<number>;
          };
      };
