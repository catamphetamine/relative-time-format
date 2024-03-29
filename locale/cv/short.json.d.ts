import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'cv';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;