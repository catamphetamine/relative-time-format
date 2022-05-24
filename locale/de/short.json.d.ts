import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'de';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;