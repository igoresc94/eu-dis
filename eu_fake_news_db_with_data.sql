-- EU Countries Table
CREATE TABLE EU_Countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- Insert EU Countries
INSERT INTO EU_Countries (name) VALUES
('Austria'), ('Belgium'), ('Bulgaria'), ('Croatia'), ('Cyprus'), ('Czech Republic'),
('Denmark'), ('Estonia'), ('Finland'), ('France'), ('Germany'), ('Greece'), ('Hungary'),
('Ireland'), ('Italy'), ('Latvia'), ('Lithuania'), ('Luxembourg'), ('Malta'),
('Netherlands'), ('Poland'), ('Portugal'), ('Romania'), ('Slovakia'), ('Slovenia'), ('Spain'), ('Sweden');

-- EU Parties Table
CREATE TABLE EU_Parties (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    country_id INT REFERENCES EU_Countries(id),
    ideology VARCHAR(50),
    seats INT
);

-- Insert EU Parties with seat counts before 2024 elections
INSERT INTO EU_Parties (name, seats) VALUES
    ('EPP', 187),          -- European People's Party
    ('S_D', 148),          -- Progressive Alliance of Socialists & Democrats
    ('Renew_Europe', 97),  -- Renew Europe
    ('ID', 76),            -- Identity and Democracy
    ('Greens_ALE', 67),    -- Greens/European Free Alliance
    ('ECR', 62),           -- European Conservatives and Reformists
    ('GUE_NGL', 40);       -- The Left in the European Parliament - GUE/NGL

CREATE TABLE EU_Parliament_Seats (
    id SERIAL PRIMARY KEY,
    country_id INT REFERENCES EU_Countries(id),
    EPP INT DEFAULT 0, -- European People's Party
    S_D INT DEFAULT 0,  -- Progressive Alliance of Socialists & Democrats
    Renew_Europe INT DEFAULT 0,
    Greens_ALE INT DEFAULT 0,
    ECR INT DEFAULT 0,  -- European Conservatives and Reformists
    ID INT DEFAULT 0,   -- Identity and Democracy
    GUE_NGL INT DEFAULT 0, -- European United Left–Nordic Green Left
    NI INT DEFAULT 0,   -- Non-Inscrits (non-attached members)
    total_seats INT NOT NULL
);

INSERT INTO EU_Parliament_Seats (country_id, EPP, S_D, Renew_Europe, Greens_ALE, ECR, ID, GUE_NGL, NI, total_seats)
VALUES
((SELECT id FROM EU_Countries WHERE name = 'Germany'), 29, 16, 5, 21, 5, 11, 5, 0, 92),
((SELECT id FROM EU_Countries WHERE name = 'France'), 8, 5, 23, 13, 5, 22, 3, 0, 79),
((SELECT id FROM EU_Countries WHERE name = 'Italy'), 14, 19, 3, 1, 9, 28, 2, 0, 76),
((SELECT id FROM EU_Countries WHERE name = 'Spain'), 13, 20, 8, 5, 12, 0, 6, 0, 64),
((SELECT id FROM EU_Countries WHERE name = 'Poland'), 17, 5, 1, 0, 30, 0, 0, 0, 53),
((SELECT id FROM EU_Countries WHERE name = 'Romania'), 14, 10, 8, 0, 0, 0, 2, 1, 35),
((SELECT id FROM EU_Countries WHERE name = 'Netherlands'), 4, 6, 7, 3, 3, 4, 1, 0, 28),
((SELECT id FROM EU_Countries WHERE name = 'Belgium'), 4, 3, 3, 3, 0, 3, 1, 0, 17),
((SELECT id FROM EU_Countries WHERE name = 'Greece'), 8, 2, 4, 1, 2, 0, 1, 0, 18),
((SELECT id FROM EU_Countries WHERE name = 'Hungary'), 13, 0, 0, 0, 0, 0, 0, 1, 14),
((SELECT id FROM EU_Countries WHERE name = 'Portugal'), 6, 9, 2, 0, 1, 0, 1, 0, 19),
((SELECT id FROM EU_Countries WHERE name = 'Sweden'), 4, 5, 3, 2, 0, 3, 1, 0, 18),
((SELECT id FROM EU_Countries WHERE name = 'Austria'), 7, 5, 1, 2, 0, 3, 0, 0, 18),
((SELECT id FROM EU_Countries WHERE name = 'Bulgaria'), 7, 5, 0, 0, 2, 2, 1, 0, 17),
((SELECT id FROM EU_Countries WHERE name = 'Denmark'), 1, 3, 5, 2, 1, 1, 0, 0, 13),
((SELECT id FROM EU_Countries WHERE name = 'Finland'), 3, 2, 1, 3, 2, 2, 0, 0, 13),
((SELECT id FROM EU_Countries WHERE name = 'Slovakia'), 3, 3, 2, 0, 2, 2, 1, 0, 13),
((SELECT id FROM EU_Countries WHERE name = 'Ireland'), 0, 1, 2, 2, 0, 0, 0, 0, 5),
((SELECT id FROM EU_Countries WHERE name = 'Croatia'), 4, 3, 1, 0, 0, 0, 1, 0, 9),
((SELECT id FROM EU_Countries WHERE name = 'Lithuania'), 3, 1, 1, 0, 2, 0, 0, 0, 7),
((SELECT id FROM EU_Countries WHERE name = 'Latvia'), 1, 1, 1, 0, 2, 0, 0, 0, 5),
((SELECT id FROM EU_Countries WHERE name = 'Slovenia'), 3, 1, 1, 0, 1, 0, 0, 0, 6),
((SELECT id FROM EU_Countries WHERE name = 'Estonia'), 1, 2, 1, 0, 0, 0, 0, 0, 4),
((SELECT id FROM EU_Countries WHERE name = 'Cyprus'), 2, 0, 1, 0, 0, 0, 2, 0, 5),
((SELECT id FROM EU_Countries WHERE name = 'Luxembourg'), 2, 1, 1, 0, 0, 0, 0, 0, 4),
((SELECT id FROM EU_Countries WHERE name = 'Malta'), 2, 4, 0, 0, 0, 0, 0, 0, 6),
((SELECT id FROM EU_Countries WHERE name = 'Czech Republic'), 7, 4, 0, 0, 4, 2, 3, 0, 20);


-- Sectors Table
CREATE TABLE Sectors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL
);

-- Insert Sectors
INSERT INTO Sectors (name) VALUES
('Environment'), ('Politics'), ('Immigration'), ('Economy & Jobs'),
('Religion'), ('Public Security'), ('Military'), ('Sexual Minority');

-- Fake News Techniques Table
CREATE TABLE Fake_News_Techniques (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);

-- Insert Fake News Techniques
INSERT INTO Fake_News_Techniques (name) VALUES
('Conspiracy Theories'),
('Demonisation of groups'),
('Falsification of statements'),
('Disinformation about laws and policies'),
('Use of Out-of-Context Images'),
('Falsification of Documents and Fabricated Scandals'),
('Clickbait and Sensationalist Headlines'),
('Bots and Automated Campaigns');

-- Counter Disinfo Techniques Table
CREATE TABLE Counter_Disinfo_Techniques (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT
);

-- Insert Counter Disinfo Techniques
INSERT INTO Counter_Disinfo_Techniques (name) VALUES
('Media Literacy and Fact-Checking'),
('Regulation of Social Media'),
('Laws Against Hate Speech'),
('Partnerships Between Leaders'),
('Public Awareness Campaigns'),
('Demonetization of Disinformers'),
('Rapid Responses from Organizations and Authorities'),
('Active Moderation and Artificial Intelligences'),
('Algorithm Transparency');

-- Fake News Impact Table
CREATE TABLE Fake_News_Impact (
    id SERIAL PRIMARY KEY,
    fake_news_id INT REFERENCES Fake_News_Techniques(id),
    sector_id INT REFERENCES Sectors(id),
    description TEXT
);

INSERT INTO Fake_News_Impact (sector_id, counter_disinfo_id, description)
VALUES 
    (
        (SELECT id FROM Sectors WHERE name = 'Religion'),
        (SELECT id FROM Fake_News_Impact WHERE name = 'Conspiracy Theories'),
        'Claims that governments or groups aim to eradicate a religion.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Demonisation of groups'),
        'Narratives portraying certain religions as evil or criminal.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of statements'),
        'Creating false quotes to manipulate public opinion.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Disinformation about laws and policies'),
        'False claims about legal changes.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Use of Out-of-Context Images'),
        'Presenting unrelated visuals as religious scandals.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of Documents and Fabricated Scandals'),
        'Misleading numbers to create panic.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Clickbait and Sensationalist Headlines'),
        'News meant to provoke fear.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Bots and automated campaigns'),
        'Fake accounts spreading religious disinformation.'
    ),
    (
        (SELECT id FROM Sectors WHERE name = 'Sexual Minority'),
        (SELECT id FROM Fake_News_Impact WHERE name = 'Conspiracy Theories'),
        'Claims that LGBTQ+ movements secretly aim to destroy traditional values or impose a radical agenda.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Demonisation of groups'),
        'Narratives portraying LGBTQ+ individuals as dangerous, immoral, or corrupting society.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of statements'),
        'Fabricated quotes attributed to activists to mislead public opinion.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Disinformation about laws and policies'),
        'False claims about legal changes affecting LGBTQ+ rights.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Use of Out-of-Context Images'),
        'Using old or unrelated photos and videos to spread misinformation.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of Documents and Fabricated Scandals'),
        'Presenting fabricated or misrepresented studies to spread fear or misinformation.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Clickbait and Sensationalist Headlines'),
        'Exaggerated or misleading news meant to provoke outrage.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Bots and automated campaigns'),
        'Fake social media accounts spreading disinformation to create social division.'
    ),
    (
        (SELECT id FROM Sectors WHERE name = 'Environment'),
        (SELECT id FROM Fake_News_Impact WHERE name = 'Conspiracy Theories'),
        'Allegations that climate policies are meant to control the population.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Demonisation of groups'),
        'Narratives portraying scientists as criminals or threats to society.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of statements'),
        'Fabricated quotes to misrepresent scientific consensus.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Disinformation about laws and policies'),
        'False claims about the inefficiency or dangers of green energy ',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Use of Out-of-Context Images'),
        'Using old or unrelated visuals to distort reality.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of Documents and Fabricated Scandals'),
        'Cherry-picked statistics to mislead the public.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Clickbait and Sensationalist Headlines'),
        'News designed to cause panic or distrust.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Bots and automated campaigns'),
        'Fake accounts spreading anti-environmental propaganda.'
    ),
     (
        (SELECT id FROM Sectors WHERE name = 'Politics'),
        (SELECT id FROM Fake_News_Impact WHERE name = 'Conspiracy Theories'),
        'Claims that secret groups control politics.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Demonisation of groups'),
        'Narratives portraying certain religions as evil or criminal.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of statements'),
        'Fabricated quotes to manipulate voters.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Disinformation about laws and policies'),
        'False claims about voting fraud.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Use of Out-of-Context Images'),
        'Presenting unrelated visuals as religious scandals.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of Documents and Fabricated Scandals'),
        'Selective statistics to distort reality.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Clickbait and Sensationalist Headlines'),
        'Exaggerated claims for attention.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Bots and automated campaigns'),
        'Fake profiles spreading political disinformation.'
    ),
    (
        (SELECT id FROM Sectors WHERE name = 'Economy & Jobs'),
        (SELECT id FROM Fake_News_Impact WHERE name = 'Conspiracy Theories'),
        'Claims that governments or elites are engineering financial crises for control.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Demonisation of groups'),
        'Claims that specific bank workers are corrupt, genocidal, or inefficient without factual basis',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of statements'),
        'Attributing false statements to generals or defense ministers to create panic.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Disinformation about laws and policies'),
        'False claims about banks or organizations.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Use of Out-of-Context Images'),
        'Old videos or staged events presented as real.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of Documents and Fabricated Scandals'),
        'Misleading numbers to create panic.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Clickbait and Sensationalist Headlines'),
        'News designed to create panic.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Bots and automated campaigns'),
        'Fake accounts spreading economic disinformation for political or financial gain.'
    ),
     (
        (SELECT id FROM Sectors WHERE name = 'Immigration'),
        (SELECT id FROM Fake_News_Impact WHERE name = 'Conspiracy Theories'),
        'Claims that elites are orchestrating mass migration to replace native populations.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Demonisation of groups'),
        'Narratives portraying migrants as criminals or threats to society.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of statements'),
        'Fabricated quotes from officials to incite fear.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Disinformation about laws and policies'),
        'Exaggerated or false claims about financial aid.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Use of Out-of-Context Images'),
        'Sharing old or unrelated images to misrepresent migration issues.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of Documents and Fabricated Scandals'),
        'Cherry-picking or fabricating data to blame immigrants for rising crime rates.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Clickbait and Sensationalist Headlines'),
        'News designed to create panic.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Bots and automated campaigns'),
        'Fake social media profiles spreading misinformation to incite division.'
    ),
        (
        (SELECT id FROM Sectors WHERE name = 'Public Security'),
        (SELECT id FROM Fake_News_Impact WHERE name = 'Conspiracy Theories'),
        'Claims that governments are hiding crime statistics to manipulate the public.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Demonisation of groups'),
        'Narratives portraying politicians as criminals or threats to society.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of statements'),
        'Fabricated quotes from officials to incite fear.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Disinformation about laws and policies'),
        ' Fabricating quotes from law enforcement.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Use of Out-of-Context Images'),
        'Presenting unrelated footage as proof of rising crime.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of Documents and Fabricated Scandals'),
        'Inflating crime data to spread fear.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Clickbait and Sensationalist Headlines'),
        'Using shocking but misleading headlines to spread panic.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Bots and automated campaigns'),
        'Fake profiles spreading crime-related misinformation to destabilize public trust.'
    ),
     (
        (SELECT id FROM Sectors WHERE name = 'Military'),
        (SELECT id FROM Fake_News_Impact WHERE name = 'Conspiracy Theories'),
        'Claims that a government or secret organization is manipulating conflicts or promoting wars for hidden interests.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Demonisation of groups'),
        'Claims that specific military forces are corrupt, genocidal, or inefficient without factual basis',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of statements'),
        'Attributing false statements to generals or defense ministers to create panic.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Disinformation about laws and policies'),
        'Distorting numbers about military budgets, troops, or weapons to justify policies.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Use of Out-of-Context Images'),
        'Old videos or staged events presented as real.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Falsification of Documents and Fabricated Scandals'),
        'Distorting numbers about military budgets, troops, or weapons to justify policies.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Clickbait and Sensationalist Headlines'),
        'Alarmist news without real basis designed to attract an audience.',
        (SELECT id FROM Fake_News_Impact WHERE name = 'Bots and automated campaigns'),
        'Fake profiles spreading disinformation about wars, weapons, or military alliances.'
    );

-- Counter Disinfo Impact Table
CREATE TABLE Counter_Disinfo_Impact (
    id SERIAL PRIMARY KEY,
    counter_disinfo_id INT REFERENCES Counter_Disinfo_Techniques(id),
    sector_id INT REFERENCES Sectors(id),
    description TEXT
);

INSERT INTO Counter_Disinfo_Impact (sector_id, counter_disinfo_id, description)
VALUES 
    (
        (SELECT id FROM Sectors WHERE name = 'Religion'),
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Media Literacy and Fact-Checking'),
        'Teaching the public how to identify religious fake news and verify reliable sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Partnerships Between Leaders'),
        'Creating networks to quickly debunk fake news with support from legitimate religious authorities.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Rapid Responses from Organizations and Authorities'),
        'Issuing official statements to clarify misinformation.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Regulation of Social Media'),
        'Pressuring platforms to remove fake news that incites religious hatred.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Public Awareness Campaigns'),
        'Explaining the impact of disinformation on religious tolerance and social cohesion.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Demonetization of Disinformers'),
        'Cutting financial support for websites and influencers that spread religious fake news.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Laws Against Religious Hate Speech'),
        'Criminalizing the intentional spread of fake news that incites violence or religious persecution.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Active Moderation and Artificial Intelligence'),
        'Improving algorithms to detect and remove fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Algorithm Transparency'),
        'Requiring platforms to disclose how they promote certain content, though with no immediate direct impact on combating disinformation.'
    ),
    (
        (SELECT id FROM Sectors WHERE name = 'Sexual Minority'),
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Media Literacy and Fact-Checking'),
        'Educating people to recognize disinformation and promote critical thinking.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Partnerships Between Leaders'),
        'Creating rapid monitoring networks to debunk fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Regulation of Social Media'),
        'Forcing platforms to quickly remove false or harmful content.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Rapid Responses from Organizations and Authorities'),
        'Debunking fake news in real-time through official statements and public campaigns.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Laws Against Hate Speech'),
        ' Criminalizing organized fake news campaigns targeting minorities.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Public Awareness Campaigns'),
        'Providing accessible explanations of the impact of disinformation and LGBTQ+ rights.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Demonetization of Disinformers'),
        'Providing accessible explanations of the impact of disinformation and LGBTQ+ rights.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Active Moderation and Artificial Intelligence'),
        'Improving algorithms to detect and remove fake news before it spreads widely.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Algorithm Transparency'),
        'Requiring platforms to disclose how they promote certain content, though this alone has a limited impact.'
    ),
    (
        (SELECT id FROM Sectors WHERE name = 'Environment'),
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Media Literacy and Fact-Checking'),
        'Teaching the public to understand climate change and verify reliable sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Partnerships Between Leaders'),
        'Creating networks to quickly debunk fake news based on scientific data.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Rapid Responses from Organizations and Authorities'),
        'Scientists and institutions should counter disinformation with concrete data.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Regulation of Social Media'),
        'Pressuring platforms to remove environmental fake news that distorts scientific evidence.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Public Awareness Campaigns'),
        'Informing people about the impacts of climate change and how to recognize disinformation.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Demonetization of Disinformers'),
        'Cutting funding for websites and influencers that spread environmental fake news.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Laws Against Hate Speech'),
        'Criminalizing the intentional spread of fake news that harms environmental policies.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Active Moderation and Artificial Intelligence'),
        'Improving algorithms to detect fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Algorithm Transparency'),
        'Requiring platforms to disclose how they promote certain content, though this alone has no immediate impact on combating disinformation.'
    ),
     (
        (SELECT id FROM Sectors WHERE name = 'Politics'),
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Media Literacy and Fact-Checking'),
        'Teaching the public to identify fake news and verify reliable sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Partnerships Between Leaders'),
        'Creating rapid monitoring networks to debunk fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Rapid Responses from Organizations and Authorities'),
        'Communication strategies to debunk fake news in real-time.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Regulation of Social Media'),
        'Pressuring platforms to remove political fake news quickly, especially during election periods.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Public Awareness Campaigns'),
        'Explaining the risks of disinformation in democracy and encouraging the use of reliable sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Demonetization of Disinformers'),
        'Blocking funding for websites and influencers who profit from spreading political fake news.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Laws Against Hate Speech'),
        'Criminalizing the intentional spread of fake news that could compromise elections.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Active Moderation and Artificial Intelligence'),
        'Improving algorithms to detect and remove fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Algorithm Transparency'),
        ' Requiring platforms to disclose how they promote certain content, though this alone has no immediate impact on combating disinformation.'
    ),
    (
        (SELECT id FROM Sectors WHERE name = 'Public Security'),
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Media Literacy and Fact-Checking'),
        'Teaching the public to correctly interpret crime statistics and verify sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Partnerships Between Leaders'),
        'Creating monitoring networks to debunk fake news before it goes viral..',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Rapid Responses from Organizations and Authorities'),
        'Police, ministries, and experts must counter disinformation with real data.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Regulation of Social Media'),
        'Pressuring platforms to quickly remove disinformation about public security.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Public Awareness Campaigns'),
        'Explaining the risks of disinformation in security matters and encouraging the use of reliable sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Demonetization of Disinformers'),
        'Preventing influencers and websites that profit from spreading panic about security from receiving funding.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Laws Against Hate Speech'),
        'Criminalizing the intentional spread of fake news that causes panic or violence.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Active Moderation and Artificial Intelligence'),
        'Improving algorithms to detect fake news about security before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Algorithm Transparency'),
        'Requiring platforms to disclose how they promote certain content, though with limited direct impact on combating disinformation.'
    ),
     (
        (SELECT id FROM Sectors WHERE name = 'Economy & Jobs'),
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Media Literacy and Fact-Checking'),
        'Teaching the public to correctly interpret economic statistics and verify reliable sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Partnerships Between Leaders'),
        ' Creating monitoring networks to debunk fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Rapid Responses from Organizations and Authorities'),
        ' Central banks, economy ministries, and economists must counter fake news with real data.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Regulation of Social Media'),
        'Pressuring platforms to remove economic fake news, especially during times of crisis.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Public Awareness Campaigns'),
        'Informing people about the risks of economic disinformation and encouraging the use of reliable sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Demonetization of Disinformers'),
        'Blocking funding for websites and influencers who profit from spreading economic fake news.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Laws Against Hate Speech'),
        'Criminalizing the intentional spread of fake news that causes economic panic or promotes fraud.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Active Moderation and Artificial Intelligence'),
        'Improving algorithms to detect fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Algorithm Transparency'),
        'Requiring platforms to disclose how they promote certain content, though with limited direct impact on combating disinformation.'
    ),
     (
        (SELECT id FROM Sectors WHERE name = 'Immigration'),
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Media Literacy and Fact-Checking'),
        'Teaching people to recognize manipulations and identify reliable sources.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Partnerships Between Leaders'),
        'Creating rapid monitoring networks to debunk fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Rapid Responses from Organizations and Authorities'),
        'RStrategies to debunk fake news in real-time through official statements and public campaigns.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Regulation of Social Media'),
        'Pressuring platforms to remove economic fake news, especially during times of crisis.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Public Awareness Campaigns'),
        'Clarifying the real impacts of immigration and debunking myths.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Demonetization of Disinformers'),
        'Cutting funding for websites and influencers who profit from spreading immigration-related disinformation.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Laws Against Hate Speech'),
        'Criminalizing organized campaigns that spread fake news against immigrants.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Active Moderation and Artificial Intelligence'),
        'Improving algorithms to detect and remove fake news before it goes viral.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Algorithm Transparency'),
        'Requiring platforms to disclose how they promote certain content, though with limited impact.'
    ),
     (
        (SELECT id FROM Sectors WHERE name = 'Military'),
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Media Literacy and Fact-Checking'),
        ' Teaching people to identify reliable sources and avoid falling for alarmist narratives.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Partnerships Between Leaders'),
        'Creating monitoring networks to quickly debunk fake news, especially during conflicts.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Rapid Responses from Organizations and Authorities'),
        'Armies and defense ministries should provide official information before fake news gains traction.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Regulation of Social Media'),
        'Forcing platforms to limit the spread of military-related fake news, especially in times of war.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Public Awareness Campaigns'),
        'Informing the population about the risks of military disinformation and how to verify information.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Demonetization of Disinformers'),
        'Cutting off funding for websites and influencers who profit from spreading military fake news.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Laws Against Hate Speech'),
        'Criminalizing the intentional spread of fake news that could threaten national security.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Active Moderation and Artificial Intelligence'),
        'Algorithms automatically detecting fake news, though real-time identification remains a technical challenge.',
        (SELECT id FROM Counter_Disinfo_Techniques WHERE name = 'Algorithm Transparency'),
        'Requiring platforms to disclose how they promote certain content, though this has no immediate direct impact on combating military disinformation.'
    );