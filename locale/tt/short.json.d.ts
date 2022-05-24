import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tt';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;