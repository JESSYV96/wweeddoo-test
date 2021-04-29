PGDMP     
                    y           wweeddoo-test    13.1    13.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24726    wweeddoo-test    DATABASE     Z   CREATE DATABASE "wweeddoo-test" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE "wweeddoo-test";
                jessy1    false            �            1259    24753    project    TABLE     �   CREATE TABLE public.project (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL
);
    DROP TABLE public.project;
       public         heap    jessy1    false            �            1259    24751    project_id_seq    SEQUENCE     �   CREATE SEQUENCE public.project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.project_id_seq;
       public          jessy1    false    203            �           0    0    project_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.project_id_seq OWNED BY public.project.id;
          public          jessy1    false    202            �            1259    24729    skill    TABLE     _   CREATE TABLE public.skill (
    id integer NOT NULL,
    content character varying NOT NULL
);
    DROP TABLE public.skill;
       public         heap    jessy1    false            �            1259    24727    skill_id_seq    SEQUENCE     �   CREATE SEQUENCE public.skill_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.skill_id_seq;
       public          jessy1    false    201            �           0    0    skill_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.skill_id_seq OWNED BY public.skill.id;
          public          jessy1    false    200            �            1259    24764    user    TABLE     �  CREATE TABLE public."user" (
    id integer NOT NULL,
    firstname character varying NOT NULL,
    lastname character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    projects text NOT NULL,
    skills text NOT NULL,
    needs text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone DEFAULT now()
);
    DROP TABLE public."user";
       public         heap    jessy1    false            �            1259    24762    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          jessy1    false    205            �           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          jessy1    false    204            ;           2604    24756 
   project id    DEFAULT     h   ALTER TABLE ONLY public.project ALTER COLUMN id SET DEFAULT nextval('public.project_id_seq'::regclass);
 9   ALTER TABLE public.project ALTER COLUMN id DROP DEFAULT;
       public          jessy1    false    203    202    203            :           2604    24732    skill id    DEFAULT     d   ALTER TABLE ONLY public.skill ALTER COLUMN id SET DEFAULT nextval('public.skill_id_seq'::regclass);
 7   ALTER TABLE public.skill ALTER COLUMN id DROP DEFAULT;
       public          jessy1    false    201    200    201            <           2604    24767    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          jessy1    false    205    204    205            �          0    24753    project 
   TABLE DATA           8   COPY public.project (id, name, description) FROM stdin;
    public          jessy1    false    203   �       �          0    24729    skill 
   TABLE DATA           ,   COPY public.skill (id, content) FROM stdin;
    public          jessy1    false    201   �       �          0    24764    user 
   TABLE DATA           }   COPY public."user" (id, firstname, lastname, email, password, projects, skills, needs, "createdAt", "updatedAt") FROM stdin;
    public          jessy1    false    205   �       �           0    0    project_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.project_id_seq', 1, false);
          public          jessy1    false    202            �           0    0    skill_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.skill_id_seq', 1, false);
          public          jessy1    false    200            �           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 4, true);
          public          jessy1    false    204            B           2606    24761 &   project PK_4d68b1358bb5b766d3e78f32f57 
   CONSTRAINT     f   ALTER TABLE ONLY public.project
    ADD CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.project DROP CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57";
       public            jessy1    false    203            @           2606    24737 $   skill PK_a0d33334424e64fb78dc3ce7196 
   CONSTRAINT     d   ALTER TABLE ONLY public.skill
    ADD CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.skill DROP CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196";
       public            jessy1    false    201            D           2606    24774 #   user PK_cace4a159ff9f2512dd42373760 
   CONSTRAINT     e   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760";
       public            jessy1    false    205            F           2606    24776 #   user UQ_e12875dfb3b1d92d7d7c5377e22 
   CONSTRAINT     c   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);
 Q   ALTER TABLE ONLY public."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22";
       public            jessy1    false    205            �      x������ � �      �      x������ � �      �   /  x��T�n�0<K_��ҋ��aɲN5ꢀ��A����@S�M�">E>�ߡ�Jv�Hb_ڃ iwɝ�2rVr'�������O_7�h���6������� J&��%�ro�ђ[CQ���M��j�Xe�P`�6]��g�	lA�0T(�EP��wV��*(:�G�����&��k��-LS���C}������p������z�%a�F9n�h�%a�S}��N��
��%�\VU�V��'	�qG��
�f�
+c�@tH��1�F3}��75LlQ���`ތQxLo�
�y2�v~�Qx9����sgi��q���/ڿ��p�t�9�# 5ʒ��������ͨ%�^77-�p$��8�*�ޣE	�#N;B�#B>�SR�sM��M��}k����Hb �Ж/{-�7ݚ����#�� �<��4�iv%�N����Y;�����M�K�y܉�nO"��0��J�����V!by#Us|�#��@��.��k�>��Oо�8#�H)7��N��Q�j'�ܚ�@}2ʮ�,/���I�σ�<�]I����=��     