import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fo';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;