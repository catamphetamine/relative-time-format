import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pcm';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;