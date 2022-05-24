import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pcm';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;