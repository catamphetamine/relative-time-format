import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sl';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;