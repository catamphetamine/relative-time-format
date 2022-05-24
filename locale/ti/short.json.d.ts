import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ti';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;