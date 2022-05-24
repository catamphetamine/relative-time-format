import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pcm';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;