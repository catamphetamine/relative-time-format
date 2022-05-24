import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'uk';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;